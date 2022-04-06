import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './component/Footer'
import Header from './component/Header'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'


import './styles/app.css'

export default function App() {


  return (

    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />} />
       
              <Route path='/login' element={  <Login />} />
   
    
        <Route path='/blog' element={<Blog /> } />
        <Route path='/contact' element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}
