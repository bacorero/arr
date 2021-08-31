
AFRAME.registerComponent('sceneel',{
        init:function(){
                var scena = document.querySelector('a-scene');
                var esfera = document.createElement('a-sphere');
                var cilindro = document.createElement('a-cylinder');

                esfera.setAttribute('gps-projected-entity-place',{latitude:38.346401,longitude:-0.506278});
                esfera.setAttribute('material','color','green');

                cilindro.setAttribute('gps-projected-entity-place',{latitude:38.346390,longitude:-0.506200});
                cilindro.setAttribute('material','color','blue');
                cilindro.setAttribute('look-at','[gps-projected-camera]');
                cilindro.setAttribute('height','3');
                cilindro.setAttribute('radius','3');

                //esfera.setAttribute('depth','5');
                //esfera.setAttribute('height','5');
                //esfera.setAttribute('width','5');

                scena.appendChild(esfera);
                scena.appendChild(cilindro);
        }
});