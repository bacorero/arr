/*AFRAME.registerComponent('camara', { 
 
    tick : function (time,deltatime) {
  
        var entity = this.el;
        var delta = deltatime/1000;
        var velocidad = 2;
        entity.object3D.position.z -= velocidad * delta;
        //entity.object3D.position.x += (velocidad * delta)/10;
        }
  });*/

  AFRAME.registerComponent('marcha1', { 
 
    tick : function (time,deltatime) {
  
        var entity = this.el;
        var delta = deltatime/1000;
        var velocidad = 1;
        entity.object3D.position.z += velocidad * delta;
        }
  });

  AFRAME.registerComponent('desplazar', { 
 
    tick : function (time,deltatime) {
  
        var entity = this.el;
        //var delta = deltatime/1000;
        console.log(time/1000);
        if(time/1000 >= 10)
          el.setAtribute("stiffness", "1");
        }
  });