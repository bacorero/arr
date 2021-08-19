window.onload = () => {

    let places = staticLoadPlaces();            //Cargamos los objetos

    renderPlaces(places);                       //Los renderizamos
};

//Esta funcion devuelve los objetos predeterminados
function staticLoadPlaces(){
    return[
        {
            name:'a-box',
            color:'yelow',
            latitude:'38.346771',
            longitude:'-0.506523'
        },
    ];
}

//Funcion que renderiza los objetos precargados
function renderPlaces(places){
    let scene = document.querySelector('a-scene');          //Apuntamos al tag 'a-scene'

    //Recorremos los objetos para renderizarlos
    places.forEach(place =>{
        //let model = document.createElement(place.name);     //Creamos el objeto
        //let color = place.color;                            //Color del objeto
        //model.setAttribute('color',color);
        console.log(place.color);
        console.log(place.name);

        //model.setAttribute('gps-entity-place');
    })
}