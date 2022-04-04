import React from 'react'
import { getAllBlog, getSingleBlog } from '../redux/actions/blogActions'
import Login from './Login'
import {useDispatch, useSelector} from "react-redux"

function Home() {
const dispatch = useDispatch()
const AllBlogs = useSelector((state)=>state).blog.blog
const SingleBlog = useSelector((state)=>state).blog.singleBlog



  return (
    <>
    <Login />
    <h1>
      HOME 
    </h1>

<div>
  <p>{SingleBlog.title} </p>
  <h2>BLOG</h2>
  <button onClick={()=>dispatch(getAllBlog())}>Get All Blogs</button>
</div>
<ul>
  {
  AllBlogs.map((post, index)=>(
    <li key={index}  onClick={()=>dispatch(getSingleBlog(post.id))}>{post.title} {post.body} </li>
  ))
}
</ul>


    </>
  )
}

export default Home