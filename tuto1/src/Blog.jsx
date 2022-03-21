import { Button } from "react-bootstrap";
import { useRef, useState } from "react"
import CounterProject from "./component/CounterProject";

export default function Blog() {
const [value, setValue] = useState(0)

const valueHandler = (e, input)=>{
e.preventDefault()
if(value <=0){
  console.log("value can't be smaller than 0")
}
switch(input){
  case "dec":
 setValue(value -1)
  break;
  case "inc":
 setValue(value +1)
    break;
    default:
      console.log("hello")
}
}

//   const nameRef = useRef()
// const clickHandler = (e, name)=>{
//   e.preventDefault()
//   console.log("test", name)
//   console.log(nameRef.current.value)
//   console.log(nameRef)
//   //nieuwe className toevoegen
//   nameRef.current.classList.add("newClassname")
// }


  return (
    <div>
      {/* <h1>Blog Section</h1>
      <h2>Let's talk dirty</h2>
      <p>Or not, keep it clean, just render what needs to be changed</p>
      <input 
      className="form-control mb-2" 
      type="text"
    ref = {nameRef}
      />
      <Button onClick={(e)=> clickHandler(e, "An")} > CLICK IT</Button> */}

<CounterProject clickHandler={valueHandler(e, input)} recentNumber={value} />
    </div>
  )
}
