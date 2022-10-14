import {Routes, Route} from 'react-router-dom'
import { useEffect, useContext, useState } from 'react';
import './App.css';
import { CreacionContext } from './context/CreacionContext';
import { getInfoClima } from './service';
import Home from './routes/Home/home';
import UbicacionCreation from './routes/Ubicaciones/UbicacionCreation';

function App() {
  const { creado, setCreado} = useContext(CreacionContext)
  const [latitud ] = useState(-24.24)
  const [longitud ] = useState(-64.87)
  //const [ imagen , setImagen ] = useState()


    
  useEffect(()=> {
    getInfoClima( latitud,longitud )
    .then((data) => {
      console.log("APP" ,data)
      setCreado([...creado, data]);
    })
    .catch((err) => console.log(err));
  },[])

  console.log(creado)



 // console.log(creado.current_weather.temperature)
  return (
    
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>

          <Route path='ubicacion/create' element={<UbicacionCreation/>}/>
        </Route>
      </Routes>
      
    </div>
 
  );
}

export default App;
