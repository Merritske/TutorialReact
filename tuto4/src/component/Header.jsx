import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
     
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Blog">Blog</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>
      <Nav.Link href="/Admin">Admin</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
