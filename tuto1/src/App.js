import { Container } from "react-bootstrap"
import HelloWorld from "./component/HelloWorld"
import Layout from "./component/Layout"

//deze wordt niet in index gerenderd 
//de Blog wordt getoond

export default function App() {
  return (
      <Layout >

   
  <Container>
      <h1>Hello ReactJS</h1>
<HelloWorld 
mesag={"hello World 2"} 
test={"onother example"} 
Detail = {Test}
/>
      </Container> 
        </Layout>
  )
}

function Test(){
    return(
        <h1>test test</h1>
    )
}