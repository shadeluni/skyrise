import React from 'react'
import './reservation.scss'
import Destination from './Destination';
import uno from '../../img/uno.jpg'
import dos from '../../img/dos.jpg';
import tres from '../../img/tres.jpg';
import Register from '../Register/RegisterForm'
import ReservationGroup from './ReservationGroup';


function Reservation() {
  return (
    <div className='reservation'>
        <h1>Tu próximo viaje empieza con una simple reserva</h1>
        <ReservationGroup/>
        {/*cards */}
        <div className="destinations">
        <Destination img={uno}/>
        <Destination img={dos}/>
        <Destination img={tres}/>
        </div>
        <Register/>
    </div>
  )
}

export default Reservation