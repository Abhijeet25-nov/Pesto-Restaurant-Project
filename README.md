# 🍔Pesto Restaurant Web Application

A full-stack restaurant web application built using **Flask**, **PostgreSQL**, and **HTML/CSS/JavaScript**.  
This project allows customers to browse menus, place orders, and enables restaurant owners to manage and track orders efficiently.

---

##  Features

###  Customer Side
- Browse restaurant menu
- Add items to cart
- Checkout with customer details
- Generate unique order code
- View order summary with total price

###  Order Management
- Store order details in PostgreSQL database
- Track customer orders
- View all orders in admin panel
- Delete orders when required

###  System Highlights
- Dynamic cart handling using JSON
- Real-time order processing
- Automatic order code generation
- Clean UI using HTML templates

---

##  Tech Stack

- **Backend:** Flask (Python)
- **Frontend:** HTML, CSS, JavaScript (Jinja2 Templates)
- **Database:** PostgreSQL
- **Library:** psycopg2

## 📂 Project Structure
```
Pesto_Project/
│── app.py
│── database.sql
│── restaurant_pesto.sql
│
├── templates/
│ ├── main.html
│ ├── menu.html
│ ├── checkout.html
│ ├── thankyou.html
│ ├── orders.html
│
├── static/
│ ├── css/
│ ├── js/
```

## How to Run
### 1. Create and Activate Virtual Environment
```
python -m venv venv
```
**Activate it:**
Windows:
```
venv\Scripts\activate
```
Linux/Mac:
```
source venv/bin/activate
```
### 2. Install Dependencies
```
pip install flask
```
### 3. Run the Server
```
python app.py
```
### 4. Open in Browser
```
http://127.0.0.1:5000/
```
## PostgreSQL Setup Guide
Follow these steps to initialize PostgreSQL for this project:

### 1. Install PostgreSQL
Download and install from:
https://www.postgresql.org/download/

---
### 2. Open PostgreSQL (psql or pgAdmin)

After installation, open:
- **pgAdmin4** (GUI) OR
- **psql (command line)**

---
### 3. Create Database
Run this command in psql or in pgAdmin4:
```sql
CREATE DATABASE restaurant;
```

## Developer
Abhijeet

---
