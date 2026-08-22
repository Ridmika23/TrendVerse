# TrendVerse

**TrendVerse** is a modern full-stack fashion e-commerce platform designed to provide a smooth, responsive, and user-friendly online shopping experience. The platform includes customer shopping features, secure authentication, wishlist and cart management, checkout, user dashboards, and administrative management tools.

## Live Demo

**Live Website:** [TrendVerse – Live Demo](https://trend-verse-seven.vercel.app/?utm_source=chatgpt.com)

**GitHub Repository:** [TrendVerse on GitHub](https://github.com/Ridmika23/TrendVerse?utm_source=chatgpt.com)

---

## Overview

TrendVerse is developed as a full-stack e-commerce application for a modern fashion brand or online clothing store.

The platform provides customers with an attractive storefront where they can browse products, search and filter items, manage their cart and wishlist, create an account, and complete the checkout process.

It also includes an administrative section that allows authorized administrators to manage products, categories, users, orders, coupons, inventory, and sales information.

The application is designed with a focus on **responsive design, usability, security, and maintainable software architecture**.

---

## Features

### Customer Features

* Responsive fashion e-commerce storefront
* Modern homepage with hero banner and featured collections
* Product browsing and product categories
* Product search
* Product filtering and sorting
* Product detail pages
* Product image gallery
* Add products to cart
* Cart management and quantity updates
* Checkout process
* User registration and login
* Secure authentication
* Wishlist functionality
* User profile management
* Order history
* Forgot password functionality
* Password reset functionality
* Responsive design for desktop, tablet, and mobile devices

### Admin Features

* Admin dashboard
* Product management
* Category management
* Order management
* User management
* Coupon management
* Inventory management
* Sales overview
* Role-based access control

### Technical Features

* Component-based React architecture
* Responsive user interface
* RESTful API
* JWT-based authentication
* Password hashing using bcrypt
* Role-based authorization
* Form validation
* Error handling
* MongoDB database integration
* Environment variable configuration
* Vercel deployment support
* Clean and maintainable project structure

---

## Tech Stack

### Frontend

* React
* JavaScript
* HTML5
* SCSS
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* JWT
* bcrypt

### Development & Design Tools

* Git
* GitHub
* Vercel
* Figma
* Postman
* Visual Studio Code

---

## Project Structure

```text
TrendVerse/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── routes/
│       ├── styles/
│       └── App.js
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── .gitignore
├── vercel.json
├── package-lock.json
└── README.md
```

---

## Pages

### Customer Pages

* Home
* Shop / Products
* Product Details
* Cart
* Checkout
* Sign Up
* Sign In
* Forgot Password
* Reset Password
* Wishlist
* User Dashboard
* Orders
* About
* Contact
* FAQ
* Privacy Policy
* Terms and Conditions

### Admin Pages

* Admin Dashboard
* Product Management
* Category Management
* Order Management
* User Management
* Coupon Management
* Inventory and Sales Overview

---

## Installation

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB or MongoDB Atlas
* Git

### Clone the Repository

```bash
git clone https://github.com/Ridmika23/TrendVerse.git

cd TrendVerse
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Backend Dependencies

```bash
cd ../backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

Replace the placeholder values with your actual configuration.

**Important:** Never upload your `.env` file or secret keys to GitHub.

---

## Running the Project Locally

### Start the Backend

```bash
cd backend
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### Start the Frontend

Open another terminal:

```bash
cd frontend
npm start
```

The frontend will run on the local development server configured in the project.

---

## API Endpoints

### Authentication

| Method | Endpoint                    | Description            |
| ------ | --------------------------- | ---------------------- |
| POST   | `/api/auth/register`        | Register a new user    |
| POST   | `/api/auth/login`           | Login user             |
| POST   | `/api/auth/logout`          | Logout user            |
| POST   | `/api/auth/forgot-password` | Request password reset |
| POST   | `/api/auth/reset-password`  | Reset password         |

### Products

| Method | Endpoint            | Description       |
| ------ | ------------------- | ----------------- |
| GET    | `/api/products`     | Get all products  |
| GET    | `/api/products/:id` | Get product by ID |
| POST   | `/api/products`     | Create a product  |
| PUT    | `/api/products/:id` | Update a product  |
| DELETE | `/api/products/:id` | Delete a product  |

### Cart

| Method | Endpoint        | Description      |
| ------ | --------------- | ---------------- |
| GET    | `/api/cart`     | Get user's cart  |
| POST   | `/api/cart`     | Add item to cart |
| PUT    | `/api/cart/:id` | Update cart item |
| DELETE | `/api/cart/:id` | Remove cart item |

### Orders

| Method | Endpoint          | Description     |
| ------ | ----------------- | --------------- |
| POST   | `/api/orders`     | Create an order |
| GET    | `/api/orders`     | Get orders      |
| GET    | `/api/orders/:id` | Get order by ID |

### Users

| Method | Endpoint           | Description                  |
| ------ | ------------------ | ---------------------------- |
| GET    | `/api/users/me`    | Get current user             |
| PUT    | `/api/users/me`    | Update user profile          |
| GET    | `/api/admin/users` | Get users for administration |

---

## Deployment

TrendVerse is deployed using **Vercel**.

### Live Application

[Open TrendVerse](https://trend-verse-seven.vercel.app/?utm_source=chatgpt.com)

### Deployment Configuration

The repository includes a `vercel.json` configuration file for deployment.

For production deployment, make sure the required environment variables are configured in the Vercel project settings.

The backend can be deployed separately using platforms such as Render or Railway, depending on the project's backend architecture.

---

## Database

TrendVerse uses **MongoDB** for storing application data.

The database can contain information such as:

* Users
* Products
* Categories
* Orders
* Cart items
* Wishlist items
* Coupons
* Inventory information

MongoDB Atlas can be used for cloud database hosting.

---

## Security

The application includes several security-related features:

* JWT-based authentication
* Password hashing with bcrypt
* Role-based access control
* Protected routes
* Environment variables for sensitive configuration
* Server-side authentication checks
* Input validation and error handling

---

## Future Enhancements

Possible future improvements include:

* Online payment gateway integration
* Product reviews and ratings
* Email notifications
* Advanced admin analytics
* Sales reports
* Multi-language support
* Dark mode
* Advanced product recommendations
* Order tracking
* Improved search functionality

---

## Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git add .
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/your-feature
```

6. Create a Pull Request.

---

## License

This project is licensed under the **MIT License**.

---

## Author

**Ridmika Yohani**

Software Engineering Student
Interested in **Quality Assurance, UI/UX Design, and Software Development**.

GitHub: [Ridmika23](https://github.com/Ridmika23?utm_source=chatgpt.com)

---

## Project Links

* **Live Website:** [TrendVerse](https://trend-verse-seven.vercel.app/?utm_source=chatgpt.com)
* **Source Code:** [GitHub Repository](https://github.com/Ridmika23/TrendVerse?utm_source=chatgpt.com)

---

Built with a focus on **modern design, usability, responsiveness, and performance**.
