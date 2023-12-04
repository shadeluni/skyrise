import React from 'react'
import './footer.scss'
import { FaArrowTurnUp } from "react-icons/fa6";


function Footer() {
  return (
    <div className='footer'>
        <div className="footer__banner">
            <h2>Haz que tus planes despeguen y<br /> reserva hoy</h2>
            <span>Ofertas Especiales</span>
            <h4>50% De Descuento</h4>
        </div>
        <div className="footer__detail">
            <div className="footer__detail--col">
                <h5>SKYRISE</h5>
                <p>Reserva ahora<br /> vive después <br /> El mundo te espera</p>
            </div>
            <div className="footer__detail--col">
                <div className="links">
                <a href="#">Willy Quesada</a>
                <a href="#">Shadel Mendez</a>
                <a href="#">Edeury Escarlante</a>
                <a href="#">Milaurys </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer