import { CreacionContext } from '../../context/CreacionContext';
import { useContext, useState } from 'react';
import './ubicacion.css';


const ubicacion = ({ ubicacion }) => {
    //const {  name, temperatura } = ubicacion.object;
    //const { creado, setCreado } = useContext(CreacionContext);

    //console.log(creado)

    return (
        <>
            <div>
                <h1>Latitud</h1>
                <input type="number" />
                <h1>Longitud</h1>
                <input type="number" />
                <h1>Imagen</h1>
                <input type="text" />
                
            </div>
        </>
    )

}

export default ubicacion;