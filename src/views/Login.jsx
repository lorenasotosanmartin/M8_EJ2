import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import {useAuth}  from "../Context/AuthContext";
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10)

export default function Login() {

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [users, setUser] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {login} = useAuth();



  useEffect(() => {
    fetch('src/public/users.json')
       .then((response) => response.json())
       .then((users) => {
          setUser(users.users);
        
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


  const handleSubmit = async (event) => {
   
    event.preventDefault();
    setLoading(true);

    const hashedUser =bcrypt.hashSync(inputUsername, '$2a$10$CwTycUXWue0Thq9StjUM0u')
    const hashedPasssword =bcrypt.hashSync(inputPassword, '$2a$10$CwTycUXWue0Thq9StjUM0u')
  

    for (let i=0; i < users.length; i++){

  if (inputUsername != users[i].user || inputPassword != users[i].password){
    setShow(true)
  }
}


for (let i=0; i < users.length; i++){
    if(inputUsername == users[i].user && inputPassword == users[i].password){
      if(users[i].rol=="administrador"){
        setShow(false)
        login({hashedUser,hashedPasssword, "role":"administrador"});
        navigate("/register-appointment")
        break;
      }
      if (users[i].rol=="doctor"){
        setShow(false)
        login({hashedUser,hashedPasssword, "role":"doctor"}); 
        navigate("/appointment-doctor")
        break;
        
      }
    }
 
  }
 
  setLoading(false);
  }
 



  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundColor: '#EFF8FF' }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        {/* Header */}
        <img
          className="mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        {/* ALert */}
        {show ? (
          <Alert
            className="mb-2"
            variant="danger"
            onClose={() => setShow(false)}
            dismissible
          >
            Usuario o contraseña incorrectos
          </Alert>
        ) : (
          <div />
        )}
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            autoComplete="off"
            placeholder="Ingresa usuario"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            autoComplete="off"
            placeholder="Ingresa contraseña"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
      
        {!loading ? (
          <Button className="w-100 mt-3" variant="primary" type="submit">
            Iniciar sesión
          </Button>
        ) : (
          <Button className="w-100  mt-3" variant="primary" type="submit" disabled>
            Iniciar sesión
          </Button>
        )}
       
      </Form>
    </div>
  );

}


