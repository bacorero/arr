window.onload = () => {

    let places = staticLoadPlaces();            //Cargamos los objetos

    renderPlaces(places);                       //Los renderizamos
};

//Esta funcion devuelve los objetos predeterminados
function staticLoadPlaces(){
    return[
        {
            name:'a-sphere',
            color:'blue',
            latitude:'38.346771',
            longitude:'-0.506523'
        },
        {
            name:'a-box',
            color:'red',
            latitude:'38.346000',
            longitude:'-0.506265'
        },
        {
            name:'a-box',
            color:'green',
            latitude:'38.346464',
            longitude:'-0.506308'
        },
    ];
}

//Funcion que renderiza los objetos precargados
function renderPlaces(places){
    let scene = document.querySelector('a-scene');          //Apuntamos al tag 'a-scene'

    //Recorremos los objetos para renderizarlos
    places.forEach(place =>{
        let model = document.createElement(place.name);     //Creamos el objeto

        model.setAttribute('gps-projected-entity-place',{latitude: place.latitude, longitude: place.longitude});                  
        model.setAttribute('material',{color: place.color});
        model.setAttribute('scale','2 2 2');

        console.log("latitude: " + place.latitude);
       
        scene.appendChild(model);

    })
}