
AFRAME.registerComponent('sceneel',{
        init:function(){
                var scena = document.querySelector('a-scene');
                var esfera = document.createElement('a-sphere');
                esfera.setAttribute('gps-projected-entity-place',{latitude: 38.346403, longitude: -0.506276});
                scena.appendChild(esfera);

        }
});