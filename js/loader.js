
AFRAME.registerComponent('sceneel',{
        init:function(){
                var scena = document.querySelector('a-scene');
                var esfera = document.createElement('a-sphere');

                esfera.setAttribute('gps-projected-entity-place',{latitude:38.346401,longitude:-0.506278});
                esfera.setAttribute('material','color','green');
                //esfera.setAttribute('depth','5');
                //esfera.setAttribute('height','5');
                //esfera.setAttribute('width','5');
                scena.appendChild(esfera);

        }
});