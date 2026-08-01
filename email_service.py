from flask_mail import Mail, Message

def send_order_email(mail, customer_name, phone, address, order_code, cart):

    total = 0

    items = ""

    for item in cart:

        subtotal = item["price"] * item["quantity"]

        total += subtotal

        items += (
            f"{item['name']} "
            f"x {item['quantity']} "
            f"= ₹{subtotal}\n"
        )

    msg = Message(
        subject=f"New Order - {order_code}",
        sender=mail.app.config["MAIL_USERNAME"],
        recipients=["absaxena2004@gmail.com"]
    )

    msg.body = f"""
New Order Received

Order Code : {order_code}

Customer : {customer_name}

Phone : {phone}

Address :

{address}

-----------------------

Items

{items}

-----------------------

Total = ₹{total}

"""

    mail.send(msg)