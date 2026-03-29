from flask import Flask, render_template, request, redirect, url_for
import psycopg2
import json
import random

app = Flask(__name__)

def get_conn():
    return psycopg2.connect(
        host="localhost",
        database="restaurant",
        user="postgres",
        password="root"
    )

def generate_order_code():
    return "P" + str(random.randint(1000,9999))

@app.route("/")
def home():
    return render_template("main.html")

@app.route("/menu")
def menu():
    return render_template("menu.html")

@app.route("/checkout", methods=["POST"])
def checkout():
    cart_data=request.form.get("cart")
    items=[]
    if not cart_data:
        return redirect(url_for("menu"))
    else:
        items=json.loads(cart_data)
    return render_template("checkout.html", items=items)

@app.route("/place-order", methods=["POST"])
def place_order():
    name=request.form["name"]
    address=request.form["address"]
    phone=request.form["phone"]
    cart=json.loads(request.form["cart"])
    order_code = generate_order_code()
    conn=get_conn()
    cur=conn.cursor()

    cur.execute(
        "INSERT INTO orders(customer_name,address,phone,order_code) VALUES(%s,%s,%s,%s) RETURNING id",
        (name,address,phone,order_code)
    )
    order_id=cur.fetchone()[0]

    for item in cart:
        cur.execute(
            "INSERT INTO order_items(order_id,dish_name,price,quantity) VALUES(%s,%s,%s,%s)",
            (order_id,item["name"],item["price"],item["quantity"])
        )

    conn.commit()
    cur.close()
    conn.close()

    return redirect(url_for("thankyou", order_id=order_id))

@app.route("/thankyou")
def thankyou():
    order_id = request.args.get("order_id")

    conn = get_conn()
    cur = conn.cursor()

    cur.execute("""
        SELECT dish_name, quantity, price
        FROM order_items
        WHERE order_id=%s
    """, (order_id,))
    items = cur.fetchall()

    cur.execute("""
        SELECT order_code,customer_name, phone
        FROM orders
        WHERE id=%s
    """, (order_id,))
    customer = cur.fetchone()

    cur.close()
    conn.close()

    total = sum(qty * price for _, qty, price in items)
    delivery = 40
    grand_total = total + delivery

    return render_template(
        "thankyou.html",
        order_id=order_id,
        items=items,
        customer=customer,
        total=total,
        delivery=delivery,
        grand_total=grand_total
    )

@app.route("/orders")
def view_orders():
    conn=get_conn()
    cur=conn.cursor()
    cur.execute("""
    SELECT 
        o.order_code,
        o.customer_name,
        o.phone,
        STRING_AGG(i.dish_name || ' x' || i.quantity, ', ') AS dishes,
        SUM(i.price * i.quantity) AS total_price,
        o.address
    FROM orders o
    JOIN order_items i ON o.id = i.order_id
    GROUP BY o.id, o.order_code, o.customer_name, o.phone
    ORDER BY o.id DESC;
    """)
    rows=cur.fetchall()
    cur.close()
    conn.close()
    return render_template("orders.html", rows=rows)

@app.route("/delete-order")
def delete_order():
    order_code = request.args.get("order_code")

    conn = get_conn()
    cur = conn.cursor()

    # get order id from order_code
    cur.execute("SELECT id FROM orders WHERE order_code=%s", (order_code,))
    result = cur.fetchone()

    if result:
        order_id = result[0]

        # delete order items first
        cur.execute("DELETE FROM order_items WHERE order_id=%s", (order_id,))

        # delete order
        cur.execute("DELETE FROM orders WHERE id=%s", (order_id,))

    conn.commit()
    cur.close()
    conn.close()

    return redirect(url_for("view_orders"))


if __name__=="__main__":
    app.run(debug=True)
