import Ubicacion from './components/ubicacion/ubicacion';
import { useEffect, useContext, useState } from 'react';
import './App.css';
import { CreacionContext } from './context/CreacionContext';
import { getInfoClima } from './service';

function App() {
  const { setCreado , creado } = useContext(CreacionContext)
  const [latitud, setLatitud ] = useState(-24.24)
  const [longitud, setLongitud ] = useState(-64.87)
  //const [ imagen , setImagen ] = useState()

  useEffect(()=> {
    getInfoClima( latitud,longitud )
    .then((data) => {
      console.log(data)
      setCreado(data)
    })
    .catch((err) => console.log(err));
  }, [])


  console.log(creado.current_weather.temperature)
  return (
    
    <div className="App">
      <Ubicacion />
      
    </div>
 
  );
}

export default App;
