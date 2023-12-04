import React, { useState } from 'react'
import airplane from '../../img/airplane.jpg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './register.scss';

function RegisterForm() {
  const [isCorporativeClient, setIsCorporativeClient]=useState(false)

  return (
    <div className='register'>
      <div className="register__col">
        <img src={airplane} alt="plane" />
      </div>
      <div className="register__col">
      <form action="" method="post">
      <h1>Hazte miembro,<br /> vuela alto</h1>
      <div className="register__col--inputs">
      <FloatingLabel controlId="floatingInput" label="Nombre">
        <Form.Control type="text" placeholder="Nombre" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Direccion">
        <Form.Control type="text" placeholder="Direccion" />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput" label="Telefono">
        <Form.Control type="text" placeholder="Telefono" />
      </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Correo"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <Form.Check
        type="switch"
        id="custom-switch"
        label="Soy cliente corporativo"
        checked={isCorporativeClient}
        onChange={()=> {setIsCorporativeClient(!isCorporativeClient)}}
      />
      {isCorporativeClient? 
      <FloatingLabel controlId="floatingInput" label="Nombre Empresa" id='nombre_empresa'>
      <Form.Control type="text" placeholder="Nombre Empresa" />
      </FloatingLabel> 
      : ''}
      </div>
      </form>
      <Button type='submit' className='btn__register'>Registrarse</Button>
      </div>
    </div>
  )
}

export default RegisterForm