import React, { useState } from 'react'
import { getAllBlog, getSingleBlog } from '../redux/actions/blogActions'
import Login from './Login'
import {useDispatch, useSelector} from "react-redux"
import '../styles/home.css'
import Stories from '../component/Stories'


function Home() {
const dispatch = useDispatch()
const AllBlogs = useSelector((state)=>state).blog.blog
const SingleBlog = useSelector((state)=>state).blog.singleBlog

const [text, setText] = useState({Text})

  return (
    <>
    <Login />
    <div className='container'> 
    <h1 className='title'>
      HOME 
    </h1>

<div className='posts'>
  <p>{SingleBlog.title} </p>
  <h2>BLOG</h2>
  <button onClick={()=>dispatch(getAllBlog())}>Get All Blogs</button>

<ul >
  {
  AllBlogs.map((post, index)=>(
    <li key={index}  onClick={()=>dispatch(getSingleBlog(post.id))}>{post.title} {post.body} </li>
  ))
}
</ul>

</div>
<div className='stories'>
<Stories />
 

</div>
</div>
    </>
  )
}

export default Home