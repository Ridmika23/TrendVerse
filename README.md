# TrendVerse

TrendVerse is a modern fashion e-commerce platform built to deliver a premium online shopping experience. It combines a refined user interface, smooth navigation, secure authentication, and essential commerce features such as product browsing, cart management, checkout, user dashboard, and admin controls.

## Overview

TrendVerse is designed as a full-stack web application for a fashion brand or online clothing store. It provides a responsive storefront for customers and a powerful dashboard for administrators to manage products, users, and orders efficiently.

## Features

### Customer Features
- Responsive and modern fashion storefront
- Homepage with hero banner and featured collections
- Product listing with filtering, sorting, and search
- Product detail pages with image gallery and product information
- Add to cart and cart management
- Secure checkout flow
- User authentication with sign up and sign in
- Wishlist functionality
- User dashboard for profile and order history
- Forgot password and reset password support

### Admin Features
- Admin dashboard
- Product management
- Category management
- Order management
- User management
- Coupon management
- Inventory and sales overview

### Technical Features
- Responsive UI for all screen sizes
- Reusable component-based architecture
- RESTful backend API
- JWT-based authentication
- Role-based access control
- Clean project structure
- Form validation and error handling
- Optimized and maintainable codebase

## Tech Stack

### Frontend
- React
- JavaScript
- HTML5
- SCSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- bcrypt

### Tools
- Git
- GitHub
- Figma
- Postman

## Project Structure

```bash
TrendVerse/
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
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── README.md
└── package.json
```

## Pages Included

- Home
- Shop / Products
- Product Details
- Cart
- Checkout
- Sign Up
- Sign In
- Forgot Password
- Reset Password
- Wishlist
- User Dashboard
- Admin Dashboard
- Orders
- About
- Contact
- FAQ
- Privacy Policy
- Terms and Conditions

## Installation

### Prerequisites
- Node.js
- npm
- MongoDB

### Clone the repository
```bash
git clone https://github.com/Ridmika23/TrendVerse.git
cd TrendVerse
```

### Install dependencies

```bash
cd frontend
npm install

cd ../backend
npm install
```

### Environment Variables
Create a `.env` file inside the `backend` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### Run the project

#### Start backend
```bash
cd backend
npm run dev
```

#### Start frontend
```bash
cd frontend
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`

### Products
- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

### Cart
- `GET /api/cart`
- `POST /api/cart`
- `PUT /api/cart/:id`
- `DELETE /api/cart/:id`

### Orders
- `POST /api/orders`
- `GET /api/orders`
- `GET /api/orders/:id`

### Users
- `GET /api/users/me`
- `PUT /api/users/me`
- `GET /api/admin/users`

## Deployment

Recommended deployment options:
- Frontend: Vercel or Netlify
- Backend: Render or Railway
- Database: MongoDB Atlas

## Future Enhancements

- Payment gateway integration
- Product reviews and ratings
- Email notifications
- Advanced analytics for admin
- Multi-language support
- Dark mode

## Contributing

Contributions are welcome. If you would like to improve TrendVerse, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions, collaboration, or feedback, please contact the project owner.

---

Built with attention to design, usability, and performance.
