CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    address TEXT,
    phone VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id),
    dish_name VARCHAR(100),
    price NUMERIC(10,2),
    quantity INTEGER
);

ALTER TABLE orders
ADD COLUMN order_code VARCHAR(10) UNIQUE;

ALTER TABLE orders
ADD CONSTRAINT unique_order_code UNIQUE (order_code);

SELECT * FROM orders;
DELETE FROM orders WHERE id=8