import './App.css'
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Header from './assets/header/header';
import Home from './assets/home/home';
import About from './assets/about/about';
import Cart from './assets/cart/cart';
import Checkout from './assets/checkout/checkout';
import Login from './assets/registration/login';
import Register from './assets/registration/register';
import Footer from './assets/footer/footer';
import Product from './assets/product/product';
import PrivateRoute from './assets/auth/auth';
import CheckoutForm from './assets/checkou/checkoutform';
import Return from './assets/checkou/returm';
import { useSelector } from 'react-redux';


function App() {

  const cartitems = useSelector((state) => state.cart.cartdata);

  return (
    <>
      <BrowserRouter>
        <Header cartitems={cartitems}/>
        <Routes>

          <Route path="/checkouts" element={<CheckoutForm/>} />
          <Route path="/return" element={<Return />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/private" element={<PrivateRoute element={<Home />} />} />
          <Route path="/products" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App