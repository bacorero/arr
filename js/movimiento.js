function canGame(){
  return "getGamepads" in navigator;
}

AFRAME.registerComponent('pad',{

  var: hasGP=false,
  var: despegue=false,
  

init: function(){
  var repGP;
  
  if(canGame){
     //Se ha conectado el gamepad
      $(window).on("gamepadconnected", function(e) {
        $("#gamepadPrompt").html("Game Pad Conectado!");
        hasGP = true;
        //startReportOnGamepad();
      });
    //Se ha desconectado el gamepad
      $(window).on("gamepaddisconnected", function(e) {
        hasGP = false;
      });

      //setup an interval for Chrome
      var checkGP = window.setInterval(function() {
        console.log('checkGP');
        if(navigator.getGamepads()[0]) {
            if(!hasGP) {
                $(window).trigger("gamepadconnected",{gamepad:navigator.getGamepads()[0]});
            }
            window.clearInterval(checkGP);
        }
    }, 500);
  }
},



tick: function(time,deltatime){

  //Recuperamos la entidad que ha llamado al evento
  var entity = this.el;

  //Velocidad del cohete
  var velocidad = 0.2;

  //Comprobamos si hay acción del gamepad
  if(hasGP){

    //Adquiere el primer gamepad que encuentres
    var gp = navigator.getGamepads()[0];

    //Pulsado botón A?
    if(gp.buttons[3].pressed){
        despegue = true;
    }

    //Axis left/rigth
    if(despegue){
        entity.object3D.position.x += gp.axes[1] * (deltatime/1000);
        entity.object3D.rotation.z += gp.axes[0] * (deltatime/1000);
        entity.object3D.position.y += velocidad * (deltatime/1000);
    }
  }
  
  //Velocidad de desplazamiento
  //var speed = 3;
  //Tiempo de cuenta atrás, en segundos
  //var tiempo = time/1000;

  //var objeto = this.el.getObject3D('cubo');
  //objeto.position.y += deltatime/1000 ;
  //objeto.position.x -= deltatime/1000 ;
  //console.log(tiempo);
}

});
//Axes left/rigth -->   axes[1] --> left = 1 rigth = -1
  //Axes up/down    -->   axes[0] --> up = -1  down = 1
  //A -->   button[3]
  //B -->   button[0]  
  //C -->   button[2]
  //D -->   button[1]
  //S1-->   button[4]
  //S2-->   button[5]  

/*AFRAME.registerComponent('atmosfera',{

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
});*/

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
