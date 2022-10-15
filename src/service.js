const SERVER_DOMAIN = `https://api.open-meteo.com/v1`;



export const getInfoClima = async ( latitud , longitud  ) => {

  try {
    latitud = parseFloat(latitud)
   longitud = parseFloat(longitud)
   //const MiServidor = `/forecast?latitude=${latitud}&longitude=${longitud}&hourly=temperature_2m,windspeed_10m&timezone=auto`
   const MiServidor = `/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`
   
    const response = await fetch(`${SERVER_DOMAIN}${MiServidor}`);
   //console.log(response.json())
    
    return response.json();
  } catch {
    throw new Error('could not fetch information weather');
  }
};
/*
// const   SERVER_DOMAIN = 'https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.18334987471809&longitude=-65.33129361050375&timezone=America/Argentina/Jujuy'
export const getCards = async (latitud,longitud) => {
  try {
    const SERVER_DOMAIN = 
    `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud || 24.179134}&longitude=${longitud || 65.319269}&timezone=America/Argentina/Jujuy `
    //`https://api.open-meteo.com/v1/forecast?current_weather=tr
a eso decis*/