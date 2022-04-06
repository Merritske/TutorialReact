import React, { useState }   from 'react'
import Stories from '../component/Stories'
import { getAllBlog, getSingleBlog } from '../redux/actions/blogActions'
import {useDispatch, useSelector} from "react-redux"


export default function Blog() {
    const dispatch = useDispatch()
const AllBlogs = useSelector((state)=>state).blog.blog
const SingleBlog = useSelector((state)=>state).blog.singleBlog

  return (
    <div>

<div className='container'> 
    <h1 className='title'>
      BLOG
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



    </div>
  )
}





