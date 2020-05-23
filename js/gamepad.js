AFRAME.registerComponent('pad',{

    schema:{
        hasGP:{type:'boolean',dafault:'false'}
    },

    //Función de inicio
    init:function(){
        var repGP;
        var data = this.data;
        if("getGamepads" in navigator) {
            //Evento cuando se conecta el Gamepad
            $(window).on("gamepadconnected", function(e) {
                data.hasGP = true;
                console.log("connection event");
            });
        }
    },

    //Función de tiempo
    tick:function(time,deltatime){
        var data = this.data;
        var entity = this.el;
        var gp = navigator.getGamepads()[0];
        var hasGP;
        if(data.hasGP){
            if(gp.buttons[13].pressed){
                entity.object3D.position.x += 0.3;
                console.log("Derecha");
            } 
            else if(gp.buttons[15].pressed){
                entity.object3D.position.x -= 0.3;
                console.log("Izquierda");
            } 
            else if(gp.buttons[12].pressed){
                entity.object3D.position.y += 0.03;
                console.log("Arriba");
            } 
            else if(gp.buttons[14].pressed){
                entity.object3D.position.y -= 0.03;
                console.log("Abajo");
            } 
        }
    },
});

/*function reportOnGamepad() {
    var gp = navigator.getGamepads()[0];

    
    if(gp.buttons[13].pressed)
        html += "Pulsado el botón 13";
    
}*/

/*
var repGP;
var hasGP = false;

function canGame() {
    return "getGamepads" in navigator;
}

$(document).ready(function() {

    if(canGame()) {

        var prompt = "Para empezar a usar el gamepad, conéctelo y presione cualquier botón!";
        $("#gamepadPrompt").text(prompt);
        
        //Evento cuando se conecta el Gamepad
        $(window).on("gamepadconnected", function(e) {
            hasGP = true;
            console.log("connection event");
            $("#gamepadPrompt").html("Gamepad conectado!");
            startReportOnGamepad();
        });

        //Evento cuando se desconecta el Gamepad
        $(window).on("gamepaddisconnected", function(e) {
            console.log("disconnection event");
            $("#gamepadPrompt").text(prompt);
            endReportOnGamepad()
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
    
});

function startReportOnGamepad(){
    repGP = window.setInterval(reportOnGamepad,100);
}
function endReportOnGamepad() {
    window.clearInterval(repGP);
}

function reportOnGamepad() {
    var gp = navigator.getGamepads()[0];
    var html = "";
        html += "<b>id:</b> "+gp.id+"<br/>";
        html += "<b>mapping:<b> "+gp.mapping+"<br/>";
    for(var i=0;i<gp.buttons.length;i++) {
        html+= "<b>buttons[ "+(i)+"]:</b> ";
        if(gp.buttons[i].pressed) html+= " pulsado";
        html+= "<br/>";
    }
    
    for(var i=0;i<gp.axes.length; i++) {
        html+= "<b>axes["+i+"]:</b> "+gp.axes[i]+"<br/>";
    }
    
    $("#gamepadDisplay").html(html);
}*/