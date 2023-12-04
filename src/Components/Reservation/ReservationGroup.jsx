import React from 'react';
import { GoArrowSwitch } from "react-icons/go";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ReservationGroup() {
    // Estado para controlar la visibilidad de la alerta
  const [showAlert, setShowAlert] = useState(false);

  // Función para mostrar la alerta
  const handleShowAlert = () => {
    setShowAlert(true);
  };

  // Función para ocultar la alerta
  const handleHideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
    <div className="reservation__buttons">
        <div className="reservation__buttons--group">
            <div className='group--btn'>
                <input type='text' placeholder='Partida'/>
                <FaPlaneDeparture className="icon"/>
            </div>
            <div className='group--btn'>
                <input type='text' placeholder='Destino'/>
                <FaPlaneArrival className="icon"/>
            </div>
            <button className='purple'>
                <GoArrowSwitch />
            </button>
        </div>
        {/*Second group */}
        <div className="reservation__buttons--group">
            <input type="date" className='group--btn' placeholder="Entrada"/>
            <input type="date" className='group--btn' placeholder="Salida"/>
            <div className='group--btn'>
                <input type='number' placeholder='Personas'className='guest'/>
            </div>
            <button type='submit' className='purple search' onClick={handleShowAlert}>
                <span>Reservar</span>
            </button>
            <Alert show={showAlert} variant="warning">
        <Alert.Heading>¡Debe Registrarse!</Alert.Heading>
        <p>
          Solo los usuarios registrados pueden realizar una reserva. Por favor, inicie sesion o cree una cuenta.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleHideAlert} variant="outline-danger">
            Cerrar
          </Button>
        </div>
      </Alert>
        </div>
        </div>
    </div>
  )
}

export default ReservationGroup