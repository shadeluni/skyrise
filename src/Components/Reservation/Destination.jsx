import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './destination.scss'

function Destination({img}) {
  return (
    <Card style={{ width: '22rem' }} className='destination__card'>
   <div className='destination__card--class'>
    <div className="class">
    <h5>Economy Class -One-Way</h5>
    </div>
   <Card.Img variant="top" src={img} />
   </div>
    <Card.Body>
      <Card.Title>
        <h5>KUALA LUMPUR</h5>
      </Card.Title>
      <Card.Text>
      <h6 className='description'>JAKATRA (CGK) - KUALA LUMPUR (KULL).</h6>
      </Card.Text>
      <Card.Text>
       <h3 className='price'>$132</h3>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Destination