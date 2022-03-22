import { useState, useEffect } from "react"
import "./styles/home.css"
import { Button, Container, Form } from "react-bootstrap"
import LoginForm from "./components/LoginForm"

//logindata maken

function App() {
  const [value, setValue] = useState(0)
  const [data, setData] = useState([{ id: 1 }])
  const [formData, setFormData] = useState()


  //BLOG data van doc into JSON
  const [blogData, setBlogData] = useState([])

  let url =["https://www.googleapis.com/blogger/v3/blogs/8867027205370636728/posts/7983034314144341891?key=AIzaSyBBPq4WOAiBBlsdGnL8xNqB71S5BMEUMV4", 
  "https://www.googleapis.com/blogger/v3/blogs/8867027205370636728/posts/1905931621331799833?key=AIzaSyBBPq4WOAiBBlsdGnL8xNqB71S5BMEUMV4"  ]

 
useEffect(() => {
for(let x = 0 ; x< url.length ; x ++){
     fetch(url[x])
      .then(res => res.json()) // is om de data om te zetten json file
      .then(data => {
        setBlogData(data)
        //retrieved data here
  
})}

  }, [])
 console.log(blogData)
//functie maken om data toe te voegen 
//werkt niet zoals ik het eerst dacht



  const handleClick = (e) => {
    e.preventDefault()
    console.log(value)
    //set state data here
    //setValue(value +1) stat changed here
    setData({ ...data, name: "An" })

  }

  //dit gebruiken in mijn app om importMenu te gebruiken
  const formHandler = (e) => {
    //console.log(e.target)
    const { name, value } = e.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value
    })
  }
  //npm install json-server -g
  //json-server --watch yourfile.json -p5000

  const formSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    //send data to server here
    //application/json; charset=UTF-8
    fetch("http://localhost:5000/db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(formData)
    }
    )
  }
  //GET retrieve data
  //POST create data
  //PUT (single object)(or PATCH) update data
  //DELETE delete data



  return (
    <>
      <Container>

        <Button onClick={() => setData({ ...data, email: "mail.com" })} >Click </Button>
        <Button onClick={handleClick}>Click </Button>
        <h1 className="display-5">{value}</h1>
        {console.log(data, "ggfrfrderde")}

        <LoginForm submitHandler={formSubmitHandler} formHandler={formHandler} />
<br/>
<div className="blog">
  <h1>
   {blogData.title}
</h1>
       <br/>
     

        <div dangerouslySetInnerHTML={{ __html: blogData.content }} />

</div>

      </Container>

    </>
  );
}

export default App;
