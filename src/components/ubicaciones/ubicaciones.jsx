import { CreacionContext } from '../../context/CreacionContext.js'
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './ubicaciones.css';
import { WiTornado, WiThermometerExterior } from "react-icons/wi";


const Ubicaciones = () => {
    const { creado } = useContext(CreacionContext)

    console.log("Listado de ubicaciones", creado)
let cont =0;
    return (
        <div className='favorite-container'>
            <h2 className='fav-title'>Mis ubicaciones</h2>
            {creado.map((creadoss) => (
                <Card key={cont ++} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                    <Card.Body>
                        <Card.Title>{creadoss.nombre}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Temperatura  <WiThermometerExterior /> {creadoss.current_weather.temperature} C°</ListGroup.Item>
                        <ListGroup.Item>Fuerza del viento<WiTornado /> {creadoss.current_weather.windspeed} km/h</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <ListGroup.Item>Latitud  {creadoss.latitude}</ListGroup.Item>
                        <ListGroup.Item>Longitud  {creadoss.longitude}</ListGroup.Item>

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