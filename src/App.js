import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFoundPage";
import Home from './pages/homePage'
import Products from "./pages/products";
import CartProvider from "./context/cartProvider";
import CartPage from "./pages/cartPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from "./pages/aboutUsPage";
import Checkout from "./pages/Checkout";
import SignUp from "./pages/signUpPage";
import LogInPage from "./pages/LogeInPage";
import AuthProvider from "./context/AuthProvider";
import Profile from "./pages/profile";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<CartPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </CartProvider >
    </AuthProvider>

  );
}

export default App;
