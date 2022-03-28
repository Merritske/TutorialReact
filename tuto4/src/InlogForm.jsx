import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { Link, Navigate,  } from "react-router-dom"

export default function InlogForm({redirect="/blog", children}) {
const [username, setUsername] = useState("")

    function handleChange (e){
       
        e.preventDefault()
        setUsername( e.target.value) 
        console.log(username)
       
    }

   function clickHandler(){
     return(
        console.log("hello")

     )
 

   }
     
  
        

  return (
      <>
          <Form onChange={handleChange} >
    <Form.Group className="mb-3" controlId="formGroupUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
   
  </Form> 
    <Link to={ redirect } ></Link>  
     <Button variant="info" onClick={clickHandler}>Log in</Button> 
  
      {username}
      </>

  )
}
