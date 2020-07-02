AFRAME.registerComponent('pad',{

    init:function(){
        
    },

    tick:function(time,timeDelta){
        var delta = timeDelta/1000;
        var entity = this.el;

        if($PAD.buttons[2])
        {
            entity.object3D.rotation.y += delta * 10;
            console.log($PAD.buttons[2]);
        }
        
    }
})

AFRAME.registerComponent('camara',{

    init:function(){
        entity = this.el;
        vector = new THREE.Vector3(0,0,0);
        entity.object3D.position.set(140,1.6,185);
        entity.object3D.up = vector;
        entity.object3D.lookAt(new THREE.Vector3(0,0,0));
    },

    tick:function(time,timeDelta){
        
        var delta = timeDelta/1000;
        var velocidad = 10;

        //Hacia la izquierda
        if($PAD.buttons[15] || $PAD.buttons[0])
        {
            /*vector.x += delta;
            entity.object3D.up = vector;
            entity.object3D.lookAt(new THREE.Vector3(10,0,0));
            console.log(entity.object3D.rotation);*/
            entity.object3D.position.x -= velocidad * delta;
        }
            
        //Hacia la derecha
        if($PAD.buttons[13]|| $PAD.buttons[3])
        {
            entity.object3D.position.x += velocidad * delta;
        }
            
        //Adelante
        if($PAD.buttons[2])
        {
            entity.object3D.position.z -= velocidad * delta;
            //console.log($PAD.buttons[2]);
        }

        //Atrás
        if($PAD.buttons[3] || $PAD.buttons[1])
        {
            entity.object3D.position.z += velocidad * delta;
            //console.log($PAD.buttons[2])
        }
            
    }
})