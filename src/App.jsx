import Navtop from "./components/navtop";
import Navbar from "./components/navbar";
import Home from "./pages/home/home";
import ScrollTop from "./components/scrollTop";
import Footer from "./pages/home/footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Products from "./pages/products";
import Cart from "./cart/cart";
import Wishlist from "./pages/wishlist";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Account from "./pages/account";
import Checkout from "./pages/checkout";
import ProductDetails from "./pages/productDetails";
import ProtectedRoute from "./components/protectedroute";
import GuestRoute from "./components/guestroute";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect,useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase";
import { current } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom"; 
import ForgetPassword from "./components/forgetpassword";
import ScrollToTop from "./components/scrollToTop";

function App ()
{
  const location  = useLocation()

  const [user,setUser] = useState(undefined);

  useEffect(() =>
  {
     const unsubscribe =  onAuthStateChanged(auth,(currentUser) =>
    {
      setUser(currentUser);
    });

    return ()=>
    {
      unsubscribe()
    }
  },[])
  

 
  return(
    <>
    <ScrollTop/>
    <ScrollToTop/>
     <Navtop/>
     <Navbar user={user}/>
   
    <ToastContainer/>
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/signup" element={<GuestRoute user={user}><Signup/></GuestRoute>}/>
      <Route path="/login" element={<GuestRoute user={user}><Login/></GuestRoute>}/>
      <Route path="/account" element={<ProtectedRoute user={user}><Account/></ProtectedRoute>}/>
      <Route path="/checkout" element={<ProtectedRoute user={user}><Checkout/></ProtectedRoute>}/>
      <Route path="/forgetpassword" element={<GuestRoute user={user}><ForgetPassword/></GuestRoute>}/>
      <Route path="/details/:id" element={<ProductDetails/>}/>
      <Route path="/products/category/:category" element={<Products/>}/>
    </Routes>
    <Footer user={user}/> 
    
    </>
  )
}
export default App;