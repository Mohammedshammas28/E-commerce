import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import Createproduct from './components/Createproduct'
import SellerProduct from "./pages/Sellerproduct"
import NavBar from "./pages/Navbar"
import IndividualProduct from './pages/IndividualProduct'
import Cart from './pages/cart'
import Profile from './pages/profile'
import CreateAddress  from './components/CreateAddress'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
       <Routes>
            <Route  path="/"  element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/create" element={<Createproduct/>}></Route>
            <Route path="/modify" element={<SellerProduct/>}></Route>
            <Route path="/pro" element={<IndividualProduct/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>

       </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
