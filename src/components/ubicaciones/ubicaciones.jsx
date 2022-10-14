import { CreacionContext } from '../../context/CreacionContext.js'
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ubicaciones.css';

const Ubicaciones = () => {
    const { creado } = useContext(CreacionContext)
    

    console.log("Creado de ubicaciones", creado)

 
    return (
        <div className='favorite-container'>
            <h2 className='fav-title'>Mis ubicaciones</h2>
            {creado.map((creadoss) => (
                <Card key={creadoss.length +1} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{creadoss.timezone}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Latitud  {creadoss.latitude}</ListGroup.Item>
                        <ListGroup.Item>Longitud  {creadoss.longitude}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card>Temperatura {creadoss.current_weather.temperature} C°</Card>
                        <Card>Fuerza del viento {creadoss.current_weather.windspeed} km/h</Card>
                    </Card.Body>
                </Card>
                
                
    ))
}
    </div >
)
}

export default Ubicaciones;
/*
<div>
<span>Latitud:</span>
<label> {favorite.latitude}</label>
</div>*/