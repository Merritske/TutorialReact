import {Button, Card } from "react-bootstrap"

//layout nog aanpassen

export default function Contact() {
  return (
    <Card >
  
    <Card.Body>
      <Card.Title>Contact Form</Card.Title>
      <Card.Text>
        <label className="m-5">ask your question: </label>
      <textarea type="text"/>
      <fieldset>
        <legend> How can we contact you </legend>
        <form className="m-5">
<label className="m-2">By phone</label>
        
      <input type="text" />
      <label className="m-2">By email</label>
      <input  type="email" />
      </form>
      </fieldset>
   
      </Card.Text>
      <Button variant="primary">Send question</Button>
    </Card.Body>
  </Card>
  )
}
