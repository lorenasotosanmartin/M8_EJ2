//import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';
import {useAuth} from '../context/AuthContext';
import {useLoaderData} from 'react-router-dom';


export default function Logout() {
  const { logout } = useAuth();

  const handleLogout = () => {
     logout();
    return null;
  };

  return (
    <Navbar expand="lg">
      <Container className="my-3">
      <img  src="src\assets\img\logo.png" alt="Logo clinica chillán" title="Logo clinica chillán"
            width="100" height="45"/>
       <a > <i onClick={logout} className="bi bi-box-arrow-in-right" style={{fontSize:'2rem', marginLeft:'2rem', color:'#0D6EFD'}}></i> </a>
      </Container>
    </Navbar>
  );
}