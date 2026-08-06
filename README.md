# 🍔Pesto Restaurant Web Application

A full-stack restaurant web application built using **Flask**, **PostgreSQL**, and **HTML/CSS/JavaScript**.  
This project allows customers to browse menus, place orders, and enables restaurant owners to manage and track orders efficiently.

#### Visit the restaurant: (https://pesto-restaurant-project.onrender.com)

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

---
Pictures of Website
1. First Opening page:
<img width="1920" height="1080" alt="Screenshot (191)" src="https://github.com/user-attachments/assets/eb1ecbc8-e995-4e77-8f3d-7280c839c77f" />
<img width="1920" height="1080" alt="Screenshot (192)" src="https://github.com/user-attachments/assets/50055bf4-5443-4cfa-a3c4-762b4e279aad" />
<img width="1920" height="1080" alt="Screenshot (193)" src="https://github.com/user-attachments/assets/ea4e2252-5f7e-49ce-8ebc-6075fc8eac6b" />
-

2. Second Menu Page:
<img width="1920" height="1080" alt="Screenshot (194)" src="https://github.com/user-attachments/assets/2ffcefa1-c722-4ac6-af6f-5477936303cf" />

-
3. Checkout sidebar:
<img width="1920" height="1080" alt="Screenshot (195)" src="https://github.com/user-attachments/assets/6c0603a5-f4ae-470b-9490-7ca85c11d923" />

-
4. Details from customer side:
<img width="1920" height="1080" alt="Screenshot (198)" src="https://github.com/user-attachments/assets/627112b1-5713-44f8-8988-63832dfb063f" />

-
5. Final Page:
<img width="1920" height="1080" alt="Screenshot (190)" src="https://github.com/user-attachments/assets/e6a4e495-ffe6-4e47-af02-5cfac03e5f4a" />

-
6. View Orders by Admin:
<img width="1920" height="1080" alt="Screenshot (200)" src="https://github.com/user-attachments/assets/5dd120f2-f52d-41b2-9d54-01db85bb02d2" />
---


## Developer
Abhijeet

---
