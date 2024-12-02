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

- **Node.js** >= 14.x
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
   yarn add

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

### 1. Create a Car

- **Endpoint:** `/api/cars`
- **Method:** `POST`
- **Request Body:**

````json
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

### 2. Get All Cars

**Endpoint:** `/api/cars`
**Method:** `GET`

**Description:**
Retrieve a list of all cars with details like brand, model, price, category, etc.

**Query Parameters:**
You can filter cars using the `searchTerm` parameter.
Example: `/api/cars?searchTerm=category`
The `searchTerm` can be one of the following: `brand`, `model`, or `category`.

---

**Response Example:**

```json
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
    }
    // ... rest data
  ]
}


3. Get Single car:

````

/api/cars/:carId

```

4. Update car:

```

/api/cars/:carId

```

5. Delete car:

```

/api/cars/:carId

```

6. Order car:

```

/api/orders/:carId

```

7. Get orders revenue:

```

/api/orders/revenue

```

```
