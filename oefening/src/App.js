import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'

export default function App() {


  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={"/"}>
            Home
          </Link>
        </li>
        <li> <Link to={"/login"}>
          Login
        </Link>
        </li>
        <li>
          <Link to={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/blog' element={<Blog /> } />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </BrowserRouter>

  )
}
