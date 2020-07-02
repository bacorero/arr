    var $PAD = $PAD || {};

    $PAD.buttons = [];
    $PAD.axes = [];

    var repGP;
    var hasGP = false;
    
    function canGame() {
        return "getGamepads" in navigator;
    }

    $(document).ready(function() {

        if(canGame()) {
            
            $(window).on("gamepadconnected", function(e) {
                hasGP = true;
                startReportOnGamepad();
                console.log("PAD conectado");
            });

            $(window).on("gamepaddisconnected", function(e) {
                endReportOnGamepad()
            });

            //setup an interval for Chrome
            var checkGP = window.setInterval(function() {
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

        for(var i=0;i<gp.buttons.length;i++)
            $PAD.buttons[i] = gp.buttons[i].pressed;

        for(var i=0;i<gp.axes.length; i++)
            $PAD.axes[i] = gp.axes[i];
    }

    //Mando VBOX
    //Axes left/rigth -->   axes[1] --> left = 1 rigth = -1
    //Axes up/down    -->   axes[0] --> up = -1  down = 1
    //A -->   button[3]
    //B -->   button[0]  
    //C -->   button[2]
    //D -->   button[1]
    //S1-->   button[4]
    //S2-->   button[5]   
    
    //Mando PLAY2
    //Triangulo         0
    //Círculo           1
    //Cruz              2
    //Rectángulo        3
    //Up                12
    //Down              14
    //Left              15
    //Rigth             13
    //Pad Left U/D      Axes[1] -1/1
    //Pad Left L/R      Axes[0] -1/1
    //Pad Rigth U/D     Axes[3] -1/1
    //Pad Rigth L/R     Axes[2] -1/1