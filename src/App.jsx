import React from 'react'
import "remixicon/fonts/remixicon.css";
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Form from './pages/Form';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <ScrollToTop/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/form' element={<Form/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App