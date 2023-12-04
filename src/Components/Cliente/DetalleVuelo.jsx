import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

function DetalleVuelo({img, destino, detalle, asiento, no_vuelo, hora}) {
  return (
    <Card style={{ width: '18rem', borderRadius: '25px'}}>
      <Card.Img variant="top" src={img} style={{borderTopRightRadius: '25px', borderTopLeftRadius: '25px'}}/>
      <Card.Body>
        <Card.Title>{destino}</Card.Title>
        <Card.Text>
          {detalle}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Asiento: {asiento}</ListGroup.Item>
        <ListGroup.Item>No Vuelo: {no_vuelo}</ListGroup.Item>
        <ListGroup.Item>Hora partida: {hora}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
         <Button variant="primary" className='millas'>Ver Millas</Button>
         <Button variant="danger">Cancelar Reserva</Button>
      </Card.Body>
    </Card>
  );
}

export default DetalleVuelo;