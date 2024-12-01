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

1. Create Car:

   ```
   http://localhost:5000/api/cars
   ```

2. Get All cars:

   ```
   http://localhost:5000/api/cars
   ```

3. Get Single car:

   ```
   http://localhost:5000/api/cars/:carId
   ```

4. Update car:

   ```
   http://localhost:5000/api/cars/:carId
   ```

5. Delete car:

   ```
   http://localhost:5000/api/cars/:carId
   ```

6. Order car:

   ```
   http://localhost:5000/api/orders/:carId
   ```

7. Get orders revenue:

   ```
   http://localhost:5000/api/orders/revenue
   ```
