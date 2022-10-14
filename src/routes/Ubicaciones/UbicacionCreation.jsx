import { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreacionContext } from '../../context/CreacionContext'

const UbicacionCreation = () =>{

const { creado , setCreado } = useContext(CreacionContext)
const navigate = useNavigate()





// console.log(creado.current_weather.temperature)

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      latitud: -24.25,
      longitd: -64.875,
     // velocidadViento: creado.current_weather.windspeed      ,
     // temperatura: creado.current_weather.temperature,
    }})




const onSubmit = (data) => {
    console.log(data);
    const ubicacionNew = {
      id: creado.length + 1,
      latitude: data.ubicacionLatitude,
      longitude: data.ubicacionLongitude,
      imagen: data.ubicacionImagen,
    }

    setCreado([...creado, ubicacionNew])
    navigate('/')
  }

  return (
    <div className='palette-new-container'>
      <span>Crea una nueva ubicacion</span>
      <form className='palette-form' onSubmit={handleSubmit(onSubmit)}>
       
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
          type='text'
          placeholder='Longitud'
          {...register('ubicacionLongitude', {
            required: 'Debe ingresar una Laongtud valida',
          })}
        />
        <p>{errors.ubicacionLongitude?.message}</p>


        <input
          type='text'
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