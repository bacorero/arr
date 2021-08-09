function localizacion(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
  }
}
  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
  }

