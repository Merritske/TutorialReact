import { Container, Row, Col } from "react-bootstrap";
import ChildComponent from "./component/ChildComponent";



function App({helloMessage}) {
  return (
    <>
      <Container fluid className="m-5 w-75 ">
  
        <br/>
<ChildComponent helloMessage={helloMessage}/>
        <Row className="m-5 justify-content-center" >
          <Col xs lg="2">
            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. 
            Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, 
            toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde 
            om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, 
            vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair 
            geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door 
            desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
          </Col>
          <Col >
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. 
            Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, 
            toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde 
            om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, 
            vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair 
            geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door 
            desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
            <br/>
            <img className="fluid m-5" src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="some wallpaper"/>
          </Col>
        </Row>
<Col>

</Col>
        <Row>
          <Col>
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. 
            Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, 
            toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde 
            om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, 
            vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair 
            geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door 
            desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
          </Col>
          <Col>
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. 
            Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, 
            toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde 
            om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, 
            vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair 
            geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door 
            desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
          </Col>

        </Row>



      </Container>



    </>
  );
}

export default App;
