import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <Navbar expand="lg">
      <Container className="my-3">
        <a href="/home">
          <img  src="src\assets\img\logo.png" alt="Logo clinica chillán" title="Logo clinica chillán"
            width="100" height="45"/>
        </a>
        <Nav className="me-auto mx-5">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/services">Servicios</Nav.Link>
          <Nav.Link href="/contact">Contacto</Nav.Link>
        </Nav>
        <Button onClick={() => navigate("/appointment")} variant="outline-primary" size="md"> Reservar cita <i className="bi bi-clipboard ml-1"> </i></Button>
       <a href='login'> <i className="bi bi-box-arrow-in-right" style={{fontSize:'2rem', marginLeft:'2rem', color:'#0D6EFD'}}></i> </a>
      </Container>
    </Navbar>
  );
}