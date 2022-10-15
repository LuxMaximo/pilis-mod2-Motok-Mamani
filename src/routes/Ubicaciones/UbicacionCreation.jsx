import { useState } from 'react';
import { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreacionContext } from '../../context/CreacionContext'
import { getInfoClima } from '../../service';
import './UbicacionCreation.css'

const UbicacionCreation = () =>{

const { creado , setCreado } = useContext(CreacionContext)
const [ current , setCurrent] = useState([])
//const [ vientoVelocidad , setVientoVelocidad] = useState()
//const [ codClima , setCodClima] = useState()
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate()

const obtenerDatos=(a,b)=>{
  getInfoClima( a,b )
  .then((data) => {
    console.log("Creacion de Ubicaciones" ,data.current_weather)
    setCurrent([data.current_weather])
    setCreado([...creado,data])

    
  })
  .catch((err) => console.log(err));
}


const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //ubicacionLatitude: -24.25,
      //ubicacionLongitude: -64.875,
     // velocidadViento: creado.current_weather.windspeed      ,
     // temperatura: creado.current_weather.temperature,
    }})




const onSubmit = (data) => {
    console.log("OnSubmit" ,data);
    obtenerDatos(data.ubicacionLatitude,data.ubicacionLongitude)

    console.log("prueba de entrega de temperatura" , current)
  /*
  const ubicacionNew = {
    id: creado.length + 1,
    Nombre: data.ubicacionNombre,
    latitude: data.ubicacionLatitude,
    longitude: data.ubicacionLongitude,
    imagen: data.ubicacionImagen,
    temperatura: current.temperature,
    velocidadViento: current.windspeed,
    tipoClima: current.weathercode,
  }
  setCreado([...creado, ubicacionNew])
    setIsLoading(true)
    setTimeout(() => {

      const ubicacionNew = {
        id: creado.length + 1,
        Nombre: data.ubicacionNombre,
        latitude: data.ubicacionLatitude,
        longitude: data.ubicacionLongitude,
        imagen: data.ubicacionImagen,
        temperatura: current.temperature,
        velocidadViento: current.windspeed,
        tipoClima: current.weathercode,
      }
      setCreado([...creado, ubicacionNew])
      
      setIsLoading(false)
      
    }, 3000);*/

   // navigate('/')
    
  }

  return (
    
    <div className='palette-new-container'>
      {isLoading && <h1>Loading</h1>}
      <span>Crea una nueva ubicacion</span>
      <form className='palette-form' onSubmit={handleSubmit(onSubmit)}>
       
      <input
          className='input-palette-name-form'
          type='text'
          placeholder='Nombre'
          {...register('ubicacionNombre', {
            required: 'Debe ingresar un nombre valido',
          })}
        />
        <p>{errors.ubicacionNombre?.message}</p>
        <input
          className='input-palette-name-form'
          type='text'
          placeholder='Latitud'
          {...register('ubicacionLatitude', {
            required: 'Debe ingresar una Latitud valida',
          })}
        />
        <p>{errors.ubicacionLatitude?.message}</p>


        <input
        className='input-palette-name-form'
          type='text'
          placeholder='Longitud'
          {...register('ubicacionLongitude', {
            required: 'Debe ingresar una Laongtud valida',
          })}
        />
        <p>{errors.ubicacionLongitude?.message}</p>


        <input
        className='input-palette-name-form'
          type='text'
          placeholder='url para la imagen'
          {...register('ubicacionImagen', {
            required: 'Debe ser una URL de la imagen',
          })}
        />
        <p>{errors.ubicacionImagen?.message}</p>


        <button className='btn-form' type='submit'>
          Crear Ubicacion
        </button>
      </form>
    </div>
  );
}

export default UbicacionCreation;