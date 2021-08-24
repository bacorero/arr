window.onload = () => {

    let places = staticLoadPlaces();            //Cargamos los objetos

    renderPlaces(places);                       //Los renderizamos
};

//Esta funcion devuelve los objetos predeterminados
function staticLoadPlaces(){
    return[
        {
            name:'a-box',
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
    const scene = document.querySelector('a-scene');          //Apuntamos al tag 'a-scene'
    const content = document.getElementById('contenido');
    scene.innerHTML = `<a-box gps-projected-entity-place='latitude: 38.346000; longitude: -0.506265' material='color: red' scale='2 2 2'></a-box>`
    scene.innerHTML +=`<a-box gps-projected-entity-place='latitude: 38.346771; longitude: -0.506523' material='color: blue' scale='8 8 8'></a-box>`
    scene.innerHTML +=`<a-box gps-projected-entity-place='latitude: 38.346464; longitude: -0.506308' material='color: green' scale='2 2 2'></a-box>`
}
