import {React, useEffect, useState }from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { Link } from 'react-router-dom'
import Contact from './pages/Contact'
import "./app.css"
import {Database} from "./context/index"

export default function App() {
  const [state, setState] = useState([1,2,3,4]);

const SaySomething = ()=>{
  console.log("This is a function");
}

const OnlyString = "Hello friends!";

//https://jsonplaceholder.typicode.com/posts

const [posts, setPosts] = useState([])
useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=> res.json())
.then((data)=>{
  setPosts(data)
})
.catch(err=>{
  console.log(err)
})
},[])



  return (
<Database.Provider value={[state, SaySomething, OnlyString, posts]}>
 <BrowserRouter >
 <ul className='nav'>
   <li>
     <Link to={"/"} > Home </Link>
   </li>
   <li>
     <Link to={"/Contact"}> Contact  </Link>
   </li>
 </ul>
 <Routes>
   <Route path='/' element={<Home /> } />
   <Route path='/Contact' element={<Contact/>} />
 </Routes>
 </BrowserRouter>
 </Database.Provider>
  )
}
