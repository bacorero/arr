AFRAME.registerComponent('despegue',{

  init: function(){
    //var objeto = this.el.setObject3D('cubo',new THREE.PointLight());
    
    var geometry = new THREE.CubeGeometry(2,2,2);
    var material = new THREE.MeshBasicMaterial({color:0xff1199, wirefrAME:true});
    this.el.setObject3D('cubo',new THREE.Mesh(geometry,material));
    var objeto = this.el.getObject3D('cubo');
    objeto.position.x = -5

    //console.log(objeto);
  },

  tick: function(time,deltatime){

    //Recuperamos la entidad que ha llamado al evento
    var entity = this.el;
    //Velocidad de desplazamiento
    var speed = 3;
    //Tiempo de cuenta atrás, en segundos
    var tiempo = time/1000;

    var objeto = this.el.getObject3D('cubo');
    
    objeto.position.y += deltatime/1000 ;
    //console.log(tiempo);

    if(tiempo >= 10){
      entity.object3D.position.y += 0.003;
      objeto.position.x -= deltatime/1000 ;
    }
  }

});


AFRAME.registerComponent('atmosfera',{

  init: function(){

    var entity = this.el;
    entity.object3D.opacity = 1;
  },

  tick:function(time,deltatime){
    var opacidad = 0;
    var cielo = document.querySelector("#cielo_azul");
    var entity = this.el;
    opacidad = 15/entity.object3D.position.y;
    cielo.setAttribute('opacity',opacidad);
    //console.log(entity.object3D.position.y);
  }
});

/*AFRAME.registerComponent('parabola', { 
  
  tick : function (time,deltatime) {

    //Recuperamos la entidad que ha llamado al evento
    var entity = this.el;

    //Velocidad de desplazamiento
    var speed = 3;
    //Velocidad inicial
    var v_ini = 2;
    //Tiempo de desplazamiento
    var tiempo = time/1000;
    //Gravedad
    var gravity = 9.8;
    var x;
    var y;
    x = v_ini * tiempo;

    if(entity.object3D.position.y >= 0)
        y = (v_ini * tiempo) - (0.5 * (gravity * Math.pow(tiempo, 2)));
    else
        y = -0.1;

    tiempo += deltatime/1000;

    //Movemos el objeto entidad
    
    entity.object3D.position.x += x/20;
    entity.object3D.position.y += y/20
    console.log(y);



    //Luego transformamos la propiedad 'position' de la entidad
    //entity.object3D.position.z -= 0.01;
    //entityEl.object3D.scale.z += 0.003;
    //console.log(entityEl.object3D.position.z);
    //console.log(entityEl);
    //document.querySelector('.caja').object3D.position.z -= 0.005;
  }
});*/
/*$(document).ready(function(){

  var escena = document.querySelector('a-scene').object3D;
  console.log(THREE);
  console.log(escena);
  console.log("CARGADO");

});*/

//Creamos un evento llamado 'log' que al añadirlo a la entidad genera una llamada
//cada frame que accede a la posición del componente Three.js mediante object3D
//<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" log></a-box>

/*AFRAME.registerComponent('log', { 

  tick : function () {

    //Primero hacemos que 'entity' apunte al <a-box> que lo ha llamado
    var entity = this.el;
    //Luego transformamos la propiedad 'position' de la entidad
    //entity.object3D.position.z -= 0.01;
    //entityEl.object3D.scale.z += 0.003;
    //console.log(entityEl.object3D.position.z);
    //console.log(entityEl);
    //document.querySelector('.caja').object3D.position.z -= 0.005;

    //Vamos a hacer que la entidad desaparezca cuando esté lejos
    if(entity.object3D.position.z <= -10)
    {
      entity.object3D.visible = false;
      //console.log(entity.object3D.position.z);
      entity.parentNode.removeChild(entity);
    }
  }
});

AFRAME.registerComponent('camara', { 

  tick : function (time,deltatime) {

    //Primero hacemos que 'entity' apunte al <a-box> que lo ha llamado
    var entity = this.el;
    var delta = deltatime/1000;
    var velocidad = 5;
    //Luego transformamos la propiedad 'position' de la entidad
    entity.object3D.position.x -= velocidad * delta;
    //console.log(deltatime/1000);
    //entityEl.object3D.scale.z += 0.003;
    //console.log(entityEl.object3D.position.z);
    //console.log(entityEl);
    //document.querySelector('.caja').object3D.position.z -= 0.005
  }
});
*/
