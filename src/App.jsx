import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from './pages/About'
import {  HelmetProvider } from 'react-helmet-async';



function App() {

  return (
   <>
   <HelmetProvider>
   <BrowserRouter>
   <Navbar />

  <Routes>
   <Route path="/" element={<Home />} /> 
   <Route path="/about" element={<About />} /> 

    </Routes> 
   </BrowserRouter>
   </HelmetProvider>
   
   </>
  )
}

export default App
