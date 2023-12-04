import React from 'react'
import RegisterForm from '../Register/RegisterForm'
import ReservationGroup from '../Reservation/ReservationGroup'
import lado from '../../img/lado.png'
import './login.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DetalleVuelo from './DetalleVuelo';
import uno from '../../img/uno.jpg'
import dos from '../../img/dos.jpg';
import tres from '../../img/tres.jpg';

function Login() {
  return (
    <div className='login'>
      <div className='login__section'>
      <div className="login__info">
        <div className="login__info--inp">
        <FloatingLabel controlId="floatingInput" label="No Vuelo">
          <Form.Control type="text" placeholder="No Vuelo" />
        </FloatingLabel>
        </div>
        <div className="login__info--inp">
        <FloatingLabel controlId="floatingInput" label="No Asiento">
          <Form.Control type="text" placeholder="No Asiento" />
        </FloatingLabel>
        </div>
      </div>
      <ReservationGroup/>

      <h2>Buscar Vuelo</h2>
      <div className="login__buscar">
      <FloatingLabel controlId="floatingInput" label="Destino">
        <Form.Control type="text" placeholder="Destino" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Hora partida">
        <Form.Control type="time" placeholder="Hora partida" />
      </FloatingLabel>
      <button className='search'>Buscar</button>
      </div>

      </div>
      {/* <RegisterForm/> */}
      <div className="login__img">
        <img src={lado} alt="avionlado" />
      </div>
      {/* <h3>Detalle Vuelo</h3> */}
      <div className="login__vuelo">
        <DetalleVuelo img={uno} destino='New York' detalle='Descubre la majestuosidad de nuestros picos cubiertos de nieve. Un paraíso para los amantes del esquí y la aventura alpina.' asiento={20} no_vuelo={42827} hora='04:30 a.m'/>
        <DetalleVuelo img={dos} destino='New York' detalle='Descubre la majestuosidad de nuestros picos cubiertos de nieve. Un paraíso para los amantes del esquí y la aventura alpina.' asiento={20} no_vuelo={42827} hora='04:30 a.m'/>
        <DetalleVuelo img={tres} destino='New York' detalle='Descubre la majestuosidad de nuestros picos cubiertos de nieve. Un paraíso para los amantes del esquí y la aventura alpina.' asiento={20} no_vuelo={42827} hora='04:30 a.m'/>
      </div>
    </div>
  )
}

export default Login