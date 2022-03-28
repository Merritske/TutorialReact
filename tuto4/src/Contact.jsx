import { useEffect, useState } from "react"
import { InputGroup, FormControl } from "react-bootstrap"

//layout nog aanpassen

export default function Contact() {

const [currencies, setCurrencies] = useState([])

useEffect(()=>{
FetchCurrencies()
},[])

const FetchCurrencies = ()=>{
  fetch(process.env.REACT_APP_API_URL)
.then(res=> res.json())
.then(data=>{
  console.log(data)
  setCurrencies(data.data)
  setTimeout(FetchCurrencies, 20000)
})
}
console.log(currencies)
  return (
    <>
<h1> Contact PAge</h1>
<h2>TEST</h2>
<ul>
  {
    currencies.map((currency, index)=>{
     return <li key={index}  >{currency.name} PRICE :{currency.quote['USD'].price} </li>
    })
  }
</ul>



{/* 
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
      <FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
  
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
    </InputGroup>
  
  
    <InputGroup>
      <InputGroup.Text>Leave your question here: </InputGroup.Text>
      <FormControl as="textarea" aria-label="With textarea" />
    </InputGroup> */}
  </>
  )
}
