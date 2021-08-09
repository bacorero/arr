function localizacion(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
    console.log("Mostrando ubicación");
    }
    else{
        console.log("Imposible mostrar ubicacion");
    }
  }

  
  function mostrarUbicacion (ubicacion) {
    const lng = ubicacion.coords.longitude;
    const lat = ubicacion.coords.latitude;
    console.log(`longitud: ${ lng } | latitud: ${ lat }`);
    document.getElementById('posicion').innerHTML= "HOLA";//'Longitud: ' + lng + 'Latitud: ' + lat;
  }

