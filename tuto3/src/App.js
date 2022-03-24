import { Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";



function App() {

//useState useEffect useRef useContext >> react HOOKS
//useEffect = zal uitvoeren na het loaden van de page
//empty array in usestate zetten zodat het niet "undefined" zal geven
const [posts, setPosts] = useState([]) //saved posts json data in here

  useEffect(()=>{
    console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json() ) //res.json wordt data / res = parameter van de functie
    .then((data => {
      //console.log(data)
      setPosts(data)
    } ))
    .catch(err=> console.log(err)) //om error op te sporen als data niet geladen kan worden
  },[])
  return (

<Container>



  <p>Single Post title</p>
  <Button variant={"warning"}> Previous post</Button>

  <Button variant="info" > Next post</Button>


 {
   posts.map((post, index)=>(
<div key={index} >
{console.log(post.title)}
<p >{post.title}</p>
<p>{post.body} </p>
</div>
  ))
 }
</Container>
  );
}

 



export default App;
