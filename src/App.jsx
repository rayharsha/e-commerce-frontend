import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Checkout from "./pages/Checkout"
import ProductDetails from './products/ProductDetails'
import Cart from './pages/Cart'
import Success from './pages/Success'
import LoginBox from './components/LoginBox/LoginBox'
import DeliveryLogin from './pages/DeliveryLogin'
import Dashboard from './dashboard/pages/Dashboard'
import StaffPage from './staff/pages/StaffPage'
import DashboardHome from './dashboard/pages/DashboardHome'
import DashboardLayout from './dashboard/layout/DashboardLayout'
import VerifyEmail from './staff/pages/verifyEmail'
import ForgotPassword from './staff/pages/forgotPassword'
import CategoryPage from './pages/Category/CategoryPage'
import ProductPage from "./pages/Product/ProductPage"
function App() {

  return (

    <Routes>
      <Route path='/verify-email' element={<VerifyEmail />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/" element={<LoginBox />} />
      <Route path="/delivery" element={<DeliveryLogin />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="product" element={<ProductPage />} />
      </Route>
    </Routes>



  )
}

export default App
