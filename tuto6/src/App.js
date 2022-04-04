
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, ListGroup } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import { getAllNews, getSingleNews } from './redux/actions/newsActions';


export default function App() {

const dispatch = useDispatch();

//news form initial state en news froms newsreducer
const AllPosts = useSelector((state)=>state).news.news;
const SinglePost = useSelector((state)=>state).news.singleNews

// useEffect(()=>{
//     dispatch(getAllNews())
// })

  return (
<Container>
<p className='display-5 text-cnter'>React-Redux </p>
<hr />
<p>{SinglePost.body} </p>
<div className='text-center'>
    <Button className="rounded-0 mx-2" onClick={()=>dispatch(getAllNews())} >
 Get all Posts
</Button>
<Button className="rounded-0 mx-2" variant={"dark"} onClick={()=> dispatch(getSingleNews(3))} >  Get single post </Button>
</div>
<hr/>

<div>


    <ListGroup>

   {
       AllPosts.map((post, index)=>(
<ListGroup.Item key={index} onClick={()=>dispatch(getSingleNews(post.id))}  >
    {post.title}
</ListGroup.Item>
       ))
   }

    </ListGroup>



</div>


</Container>
  )
}
