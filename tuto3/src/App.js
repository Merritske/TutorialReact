import { Container, Button, Dropdown, DropdownButton, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import DropdownAccordion from "./components/DropdownAccordion";
import CarouselTop from "./components/CarouselTop";



function App() {

  //useState useEffect useRef useContext >> react HOOKS
  //useEffect = zal uitvoeren na het loaden van de page
  //empty array in usestate zetten zodat het niet "undefined" zal geven
  const [posts, setPosts] = useState([]) //saved posts json data in here
  const [indexNumber, setIndexNumber] = useState(1)
  const [singlePost, setSinglePost] = useState([])

  useEffect(() => {
    console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/posts/" +indexNumber)
      .then(res => res.json()) //res.json wordt data / res = parameter van de functie
      .then((data => {
        // console.log(data)
        setPosts(data)

      }))
      .catch(err => console.log(err)) //om error op te sporen als data niet geladen kan worden
  },[indexNumber])

  const nextPost = (e) => {
    e.preventDefault()
    //geeft verkeerd resultaat, telt eerst af voordat hij terug optelt en bij prevPost net andersom
   // console.log(indexNumber)

    // fetch(`https://jsonplaceholder.typicode.com/posts/${indexNumber }`)
    //   //je kan ook : fetch("https://jsonplaceholder.typicode.com/posts" + indexNumber)
    //   //https://jsonplaceholder.typicode.com/posts/1   geeft de eerste post
    //   .then(res => res.json())
    //   .then(data => {
    //     setSinglePost(data)
    //   })
   setIndexNumber(indexNumber +1)
  }

  const prevPost = (e) => {
    e.preventDefault()
    // console.log(indexNumber)

    if (indexNumber == 0) {
      alert("no post found")
    } 
    //else {
    //   fetch(`https://jsonplaceholder.typicode.com/posts/${ indexNumber }`)
    //     .then(res => res.json())
    //     .then(data => {
    //       setSinglePost(data)
   //}    //     })
  setIndexNumber(indexNumber -1) 
  }
console.log(indexNumber)


  return (

    <Container className="text-center mt-5">
      <h1 >Single Post title</h1>
      <Button variant={"warning"}  onClick={prevPost}> Previous post</Button> {" "}

      <Button variant="info" onClick={nextPost} > Next post</Button>
      <p className="my-2"> {posts.title} </p>
      <p>{posts.body} </p>


      {/* 
 {
   posts.map((post, index)=>(
<div key={index} >

<p >{post.title}</p>
<p>{post.body} </p>
</div>
  ))
 } */}
 <Dropdown className="d-inline mx-2" autoClose="inside" >
    <Dropdown.Toggle id="dropdown-autoclose-inside">
      
    Set next or previous post { }
    <Badge bg="warning">new </Badge>
    </Dropdown.Toggle>
   
    <Dropdown.Menu >
      <Dropdown.Item href="#" onClick={prevPost}> Previous post</Dropdown.Item>
      <Dropdown.Item  onClick={nextPost} > Next post</Dropdown.Item>
    </Dropdown.Menu>
  
  </Dropdown>

<DropdownAccordion />


<CarouselTop posts={posts} />
    </Container>

  );
}





export default App;
