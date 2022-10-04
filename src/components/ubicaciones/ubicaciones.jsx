import Ubicacion from './../ubicacion/ubicacion';
import './ubicaciones.css';

const ubicaciones = ({ ubi }) => {
    return (<div className='grid'>
        {ubi.map((ubica) => (
            <Ubicacion key={ubica.id} palette={ubica} />
        ))}
    </div>
    )
}

export default ubicaciones;