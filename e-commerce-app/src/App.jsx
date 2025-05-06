import React from 'react';
import './App.css';
import Navbar from './Componets/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Shop from './Pages/ShopFile/Shop'
import ShopCategary from './Pages/ShopCategary/ShopCategary';
import Products from './Pages/Products/Products';
import Cart from './Pages/CartFile/Cart';
import LoginSignup from './Pages/loginSignup/LoginSignup';
import Footer from './Componets/Footer/Footer';
import men_banner from './Componets/Assets/banner_mens.png'
import women_banner from './Componets/Assets/banner_women.png'
import kids_banner from './Componets/Assets/banner_kids.png'

const App = () => {
  return (
    <>
    <BrowserRouter>
   
     <Navbar/>
   <Routes>
<Route path='/' element={<Shop/>} />
<Route path='/mens' element={<ShopCategary banner={men_banner} category="men" />} />
<Route path='/womens' element={<ShopCategary banner={women_banner} category="women" />} />
<Route path='/kids' element={<ShopCategary banner={kids_banner} category="kid" />} />
<Route path='/Product' element={<Products/>} >
<Route path=':productId' element={<Products/>}/>
</Route>
<Route path='/Cart' element={<Cart/>} />
<Route path='/Login' element={<LoginSignup/>} />
   </Routes>
   <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
