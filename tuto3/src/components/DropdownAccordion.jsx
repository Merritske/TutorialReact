import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { Accordion } from "react-bootstrap";

export default function DropdownAccordion() {
  return (
      
<Accordion className="my-5">
  <AccordionItem eventKey="0" >
    <AccordionHeader>Accordion without the music </AccordionHeader>
    <AccordionBody>
      No music in this accordion, if you want some, put on YouTube.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem eventKey="1">
<AccordionHeader>Accordion with music?</AccordionHeader>
<AccordionBody>
  Also this accordion is without the music. But do you really want to hear some accordion? <br/>
  I can recommend a song of Piazolla.
</AccordionBody>
  </AccordionItem>
</Accordion>
  
  )
}
