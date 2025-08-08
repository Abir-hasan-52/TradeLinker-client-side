# 🛒 TradeLinker - B2B Wholesale Platform

## 🔍 Project Overview

TradeLinker is a comprehensive B2B wholesale marketplace designed to connect bulk suppliers (manufacturers, distributors) with retailers, resellers, and institutional buyers. The platform enables users to add, manage, and purchase products with minimum order quantities, streamlining bulk transactions and inventory management for wholesale operations.

---

## 🌐 Live Project

🔗 **Live Demo:** [https://trade-linker-60a0f.web.app/](https://trade-linker-60a0f.web.app/)

---

## 🛠 Technologies Used

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

- React.js
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication
- Axios
- Framer Motion
- SweetAlert2
- React Toastify
- Swiper.js
- Vite

### Backend
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

- Node.js
- Express.js
- MongoDB
- JSON Web Token (JWT)
- Firebase Admin SDK

---

## 📸 Screenshots

<div align="center">
  <img src="https://i.ibb.co/qLRcVKcN/trade-linker-60a0f-web-app.png" alt="TradeLinker Homepage" width="45%" />
  <img src="https://i.ibb.co/qwcxV7y/trade-linker-60a0f-web-app-All-Products.png" alt="Product Listing" width="45%" />
</div>

<div align="center" style="margin-top: 10px;">
  <img src="https://i.ibb.co/gLqH1rn9/trade-linker-60a0f-web-app-All-Products-1.png" alt="Shopping Cart" width="45%" />
  <img src="https://i.ibb.co/vCVhsXvN/trade-linker-60a0f-web-app-All-Products-2.png" alt="User Dashboard" width="45%" />
</div>

---

## 🚀 Core Features

### 🔐 Authentication & Authorization
- **Firebase Authentication:** Email/Password and Google Sign-in
- **JWT Token Management:** Secure API communication
- **Protected Routes:** Add Product, My Products, All Products, Cart
- **Session Management:** Automatic token refresh and logout

### 🛒 Product Management
- **Add Products:** Sellers can list products with wholesale specifications
- **My Products:** Manage personal product listings
- **Update/Delete:** Full CRUD operations for product owners
- **Category-based Browsing:** Organized product discovery
- **Advanced Filtering:** Filter by minimum quantity, category, price range

### 🛍️ Shopping Experience
- **Shopping Cart System:** Add products with quantity validation
- **Minimum Order Quantity (MOQ):** Enforce wholesale purchasing standards
- **Stock Management:** Real-time inventory updates using MongoDB `$inc`
- **Product Details:** Comprehensive product information pages
- **Buy Modal:** Streamlined purchasing process with validation

### 🎨 User Experience
- **Responsive Design:** Optimized for mobile, tablet, and desktop
- **Toggle Views:** Switch between Card and Table layouts
- **Interactive Animations:** Framer Motion for smooth transitions
- **Swiper Slider:** Dynamic product carousels
- **Loading States:** React Spinners for better UX
- **Form Validation:** Real-time input validation
- **Notifications:** SweetAlert2 and React Toastify integration

### 🎯 Business Logic
- **B2B Focus:** Minimum quantity enforcement
- **Role-based Access:** Seller/Buyer functionality
- **Inventory Tracking:** Automatic stock updates
- **Category Management:** Organized product taxonomy

---

## 📁 Project Structure

```
tradelinker-client/
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation components
│   │   ├── Footer/           # Footer components
│   │   ├── ProductCard/      # Product display components
│   │   ├── Cart/             # Shopping cart components
│   │   └── Shared/           # Reusable UI components
│   ├── pages/
│   │   ├── Home/             # Homepage components
│   │   ├── Auth/             # Login/Register pages
│   │   ├── Products/         # Product-related pages
│   │   ├── Cart/             # Cart page
│   │   └── Dashboard/        # User dashboard
│   ├── hooks/                # Custom React hooks
│   ├── contexts/             # React context providers
│   ├── utils/                # Helper functions
│   ├── services/             # API service functions
│   └── assets/               # Static assets
├── public/                   # Public assets
└── package.json
```

---

## 🌟 Pages Overview

### 🏠 **Home Page**
- Hero section with Swiper slider
- Featured product categories
- Top-selling products showcase
- Call-to-action sections

### 🔐 **Authentication**
- **Login:** Email/password and Google authentication
- **Register:** User registration with validation
- **Protected Routes:** Automatic redirection

### 📦 **Product Pages**
- **All Products:** Complete product catalog with filtering
- **Add Product:** Seller product submission form
- **My Products:** Personal product management dashboard
- **Product Details:** Detailed product information and purchase modal
- **Category Page:** Category-specific product listings

### 🛒 **Shopping Cart**
- Dynamic quantity management
- Real-time price calculations
- Stock validation before purchase
- Checkout process

### 🚫 **404 Page**
- Custom not found page with navigation back to home

---

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Firebase project
- MongoDB database

### Clone the Repository
```bash
git clone https://github.com/Abir-hasan-52/tradelinker-client-side.git
cd tradelinker-client-side
```

### Install Dependencies
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📦 NPM Packages Used

### Core Dependencies
```json
{
  "axios": "^1.6.0",
  "firebase": "^10.5.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0"
}
```

### UI & Styling
```json
{
  "tailwindcss": "^3.3.0",
  "daisyui": "^4.0.0",
  "framer-motion": "^10.16.0",
  "swiper": "^11.0.0",
  "lucide-react": "^0.263.0",
  "react-icons": "^4.12.0"
}
```

### Utilities & Notifications
```json
{
  "sweetalert2": "^11.10.0",
  "react-toastify": "^9.1.0",
  "react-spinners": "^0.13.0",
  "react-rating-stars-component": "^2.2.0"
}
```

### Development
```json
{
  "vite": "^4.4.0",
  "@vitejs/plugin-react": "^4.0.0",
  "eslint": "^8.45.0",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.31"
}
```

---

 

## 🎯 Key Features Implemented

### 🛡️ **Security Features**
- JWT token-based authentication
- Protected route middleware
- Input validation and sanitization
- Secure API communication

### 🔄 **State Management**
- React Context for global state
- Local storage for cart persistence
- Real-time data synchronization

### 📱 **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized images and loading

### 🚀 **Performance Optimizations**
- Lazy loading for images
- Code splitting with React Router
- Optimized bundle size
- Fast refresh with Vite

---

## 🌟 Unique Selling Points

1. **B2B-Focused Design:** Specifically built for wholesale operations
2. **Minimum Order Quantities:** Enforces business-to-business logic
3. **Real-time Inventory:** Stock updates immediately after purchases
4. **Seller Dashboard:** Comprehensive product management tools
5. **Advanced Filtering:** Find products by quantity, category, and price
6. **Cart Persistence:** Shopping cart survives browser sessions

---

## 🚀 Future Enhancements

- [ ] Bulk order discounts
- [ ] Supplier verification system
- [ ] Advanced analytics dashboard
- [ ] Multi-currency support
- [ ] Live chat integration
- [ ] Mobile app (React Native)
- [ ] API rate limiting
- [ ] Advanced search with Elasticsearch

---

 

## 🔗 Links

- **Live Site:** [https://trade-linker-60a0f.web.app/](https://trade-linker-60a0f.web.app/)
- **Client Repository:** [GitHub Client Repo](https://github.com/Abir-hasan-52/tradelinker-client-side)
- **Server Repository:** [GitHub Server Repo](https://github.com/Abir-hasan-52/tradelinker-server-side)

---

## 📞 Contact

**Abir Hasan Mahmud**
- Email: abirhasan5208@gmail.com
- LinkedIn: [linkedin.com/in/ah-abir](https://linkedin.com/in/ah-abir)
- GitHub: [github.com/Abir-hasan-52](https://github.com/Abir-hasan-52)

---

 

## 🙏 Acknowledgments

- React team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Firebase for authentication services
- MongoDB for the flexible NoSQL database
- All the open-source contributors

---

<div align="center">
  <h3>⭐ If this project helped you, please give it a star! ⭐</h3>
  <p><strong>Built with ❤️ by Abir Hasan Mahmud</strong></p>
</div>
