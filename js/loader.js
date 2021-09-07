
AFRAME.registerComponent('sceneel',{
        init:function(){
                var scena = document.querySelector('a-scene');
                var camara = document.querySelector('a-camera');
                
                var esfera = document.createElement('a-sphere');
                var cilindro = document.createElement('a-cylinder');
                var texto = document.createElement('a-text');

                camara.setAttribute('maxDistance','10');

                esfera.setAttribute('gps-projected-entity-place',{latitude:38.346401,longitude:-0.506278});
                esfera.setAttribute('material','color','green');
                esfera.setAttribute('look-at','[gps-projected-camera]');

                cilindro.setAttribute('gps-projected-entity-place',{latitude:38.346390,longitude:-0.506200});
                cilindro.setAttribute('material','color','blue');
                cilindro.setAttribute('look-at','[gps-projected-camera]');
                cilindro.setAttribute('geometry','height','3');
                cilindro.setAttribute('geometry','radius','3');

                //texto.setAttribute('value','Hola,JM!!');
                //texto.setAttribute('text','color','green');
                //texto.setAttribute('gps-projected-entity-place',{latitude:38.345556,longitude:-0.505388});

                //esfera.setAttribute('depth','5');
                //esfera.setAttribute('height','5');
                //esfera.setAttribute('width','5');

                scena.appendChild(esfera);
                scena.appendChild(cilindro);
                //scena.appendChild(texto);
        }
});