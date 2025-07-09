# TradeLinker - B2B Wholesale Platform (Client Side)

Welcome to **TradeLinker**, a global B2B wholesale marketplace that connects bulk suppliers (manufacturers, distributors) with retailers, resellers, and institutional buyers. This client-side project is built with React and Tailwind CSS.

---

## 🌐 Live Site

👉 [Visit Live Website](https://trade-linker-60a0f.web.app/)  
 

---

## 🎯 Project Purpose

TradeLinker serves as a robust B2B platform where users can:
- Explore products by category
- Buy products in wholesale quantities
- Add and manage their own products
- Securely perform transactions
- Authenticate and manage sessions with JWT

---

## 🚀 Key Features

- 🔐 **JWT Authentication** using Firebase and secure token handling
- 🧾 **Protected Routes** (Add Product, My Product, All Product, Cart)
- 🛒 **Cart System** that modifies stock using MongoDB `$inc` operator
- 🔍 **Product Filtering** by minimum quantity
- 🔁 **Toggle View** for products (Card/Table)
- 🔄 **Update & Delete Product**
- 📦 **Category-based product listings**
- 🧾 **Dynamic Title & 404 Page**
- ✅ **Form Validation & Notifications**
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎞️ **Swiper Slider** and **Framer Motion** animations
- 🔥 SweetAlert2 for UI alerts & React Toastify for notifications

---

## 📁 Pages Overview

- `Home`: Slider, Category, and extra promotional sections
- `Login/Register`: Auth with validation
- `Add Product`: Submit product with wholesale quantity restrictions
- `All Products`: Update any product regardless of user
- `Cart`: Products purchased by user, with dynamic quantity management
- `Product Details`: Buy modal with min quantity validation
- `Category Page`: Filtered product list
- `404 Page`: Custom not found route

---

## 🧩 NPM Packages Used

### Client Dependencies:
- `axios` - for HTTP requests
- `firebase` - for authentication
- `sweetalert2` - for alerts
- `react-toastify` - for toasts
- `react-rating-stars-component` - for product ratings
- `swiper` - for slider
- `lucide-react` & `react-icons` - for UI icons
- `react-spinners` - for loading indicators
- `react-router` - for routing
- `tailwindcss` & `daisyUI` - for UI styling

### Dev Dependencies:
- `vite` - for fast development
- `eslint` - for linting
- `@vitejs/plugin-react` - for React with Vite
- `@tailwindcss/vite` - Tailwind integration

---

## 🔐 Environment Variables

Make sure to set up the following environment variables in a `.env` file:

```env
VITE_API_BASE_URL=https://your-server-url.com
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
