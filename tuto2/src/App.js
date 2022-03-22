import { useState } from "react"

import { Button, Container, Form } from "react-bootstrap"

//logindata maken

function App() {
const [value, setValue] = useState(0)
const [data, setData] = useState([{id:1}])
const [formData, setFormData] = useState()

const handleClick = (e)=>{
  e.preventDefault()
  console.log(value)
  //set state data here
  //setValue(value +1) stat changed here
  setData({...data, name: "An"})
}

const formHandler = (e)=>{
//console.log(e.target)
const {name, value} = e.target
console.log(name, value)
setFormData({
  ...formData,
  [name]: value
})
}

const  formSubmitHandler = (e)=>{
e.preventDefault()
console.log(formData)
}


  return (
   <>
   <Container>

         <Button onClick={()=>setData({...data, email: "mail.com"})} >Click </Button>
   <Button onClick={handleClick}>Click </Button>
   <h1 className="display-5">{value}</h1>
{console.log(data)} 

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={formHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" onChange={formHandler} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={formSubmitHandler}>
    Submit
  </Button>
</Form>
   </Container>

   </>
  );
}

export default App;
