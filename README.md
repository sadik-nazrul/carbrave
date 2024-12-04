#CarBrave (A car store API)

## 🚗 Overview

The ** CarBrave API ** is a backed application it's designed to a create car store to car and user order. Built with **Typescritp**, **Express**, and **Mongoose**. It's ensure to that scalable and better developement experience.

## ✨ Features

- **CRUD Operations:** Manage car inventory with ease.
- **Order Placement:** Seamlessly handle customer orders with inventory management.
- **Revenue Calculation:** Generate total revenue using MongoDB aggregation.
- **Error Handling:** Unified and detailed error responses for better debugging.

## 🛠️ Tech Stack

- **Backend Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Language:** TypeScript
- **Environment Variables:** Configured with `dotenv`

## 📁 Project Structure

```plaintext
src/
├── app/
│   ├── config/        # Configuration files
│   ├── error/         # Global error handlers
│   ├── modules/       # Feature modules
│   │   ├── cars/      # Car-related logic (routes, controllers, models, interface)
│   │   └── orders/    # Order-related logic (routes, controllers, models, interface)
├── app.ts             # Application main entry point
├── server.ts          # Server configuration

```

#Local setup guide

## Prerequisites

- **Node.js** >= v18.20.0
- **MongoDB** (local or cloud)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/sadik-nazrul/carbrave.git
   cd carbrave

   ```

2. Install dependencies:

   ```
   npm install
   or
   yarn install

   ```

3. Create a .env file in the root directory and add the following:

   ```
   PORT=5000(your prepaired port)
   DATABASE_URL=mongodb://localhost:27017/carbrave
   ```

4. Start the server:

   ```
   npm run start:dev
   or
   yarn run start:dev
   ```

## Endpoints

### **1. Create a Car**

- **Endpoint:** **`/api/cars`**
- **Method:** `POST`
- **Request Body:**

```json
{
  "brand": "Toyota",
  "model": "Camry",
  "year": 2024,
  "price": 25000,
  "category": "Sedan",
  "description": "A reliable family sedan with modern features.",
  "quantity": 50,
  "inStock": true
}
```

- **Response:** Success message and created car details.

```jsx
{
  "message": "Car created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **2. Get All Cars**

- **Endpoint:** **`/api/cars`**
- **Method:** `GET`
- **Response:** A list of all cars with details like brand, model, price, category, etc.
- Query: A list of all cars from the same category, you’ll take this as `/api/cars?searchTerm=category` searchTerm can be `brand`, `model`, `category`

```jsx
{
  "message": "Cars retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "brand": "Toyota",
      "model": "Camry",
      "year": 2024,
      "price": 25000,
      "category": "Sedan",
      "description": "A reliable family sedan with modern features.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    },
    // ... rest data
  ]
}
```

---

### **3. Get a Specific Car**

- **Endpoint:** **`/api/cars/:carId`**
- **Method:** `GET`
- **Response:** The details of a specific car by ID.

```jsx
{
  "message": "Car retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 25000,
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **4. Update a Car**

- **Endpoint:** **`/api/cars/:carId`**
- **Method:** `PUT`
- **Request Body:** (Car details to update)

```json
{
  "price": 27000,
  "quantity": 30
}
```

- **Response:** Success message and updated car details.

```jsx
{
  "message": "Car updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "brand": "Toyota",
    "model": "Camry",
    "year": 2024,
    "price": 27000,  // Price updated
    "category": "Sedan",
    "description": "A reliable family sedan with modern features.",
    "quantity": 30,  // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z"  // Updated timestamp
  }
}
```

---

### **5. Delete a Car**

- **Endpoint:** **`/api/cars/:carId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the car has been deleted.

```jsx
{
  "message": "Car deleted successfully",
  "status": true,
  "data": {}
}
```

---

### **6. Order a Car**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Inventory Management Logic:**
  - When an order is placed, reduce the **quantity** in the car model.
  - If the inventory quantity goes to zero, set **inStock** to `false`.
  - Handle **insufficient stock** cases by returning an appropriate error message.
- **Request Body:**

```json
{
  "email": "customer@example.com",
  "car": "648a45e5f0123c45678d9012",
  "quantity": 1,
  "totalPrice": 27000
}
```

- **Response:** Success message confirming the order.

```jsx
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "car": "648a45e5f0123c45678d9012",
    "quantity": 1,
    "totalPrice": 27000,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

---

### **7. Calculate Revenue from Orders (Aggregation)**

- **Endpoint:** **`/api/orders/revenue`**
- **Method:** `GET`
- **Aggregation Suggestion:**
  - Use MongoDB aggregation pipeline to calculate the total revenue from `all orders`.
  - Calculate the total price by multiplying the price of each car by the quantity ordered.
- **Response:** The total revenue from all orders.

```jsx
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 810000  // Total revenue calculated from all orders
  }
}
```

---
