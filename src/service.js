const SERVER_DOMAIN = `https://api.open-meteo.com/v1`;


export const getInfoClima = async ( latitud , longitud  ) => {
  try {
   latitud = parseFloat(latitud)
   longitud = parseFloat(longitud)
    const response = await fetch(`${SERVER_DOMAIN}/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
   // console.log(response.json())
    
    return response.json();
  } catch {
    throw new Error('could not fetch information weather');
  }
};