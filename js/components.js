AFRAME.registerComponent('peakfinder', {

    var: contador = 0,

    init: function(){
        this.loaded = false;
        counter = 0;
        window.addEventListener('gps-camera-update-position', e=>{
            if(this.loaded === false){
                this._loadPeaks(e.detail.position.longitude,e.detail.position.latitude);
                this.loaded = true;
            }
        });
    },

    tick: function(time,deltatime){

        contador += contador + deltatime;
        if(contador >= 30000){
            window.addEventListener('gps-camera-update-position', e=>{
                this._loadPeaks(e.detail.position.longitude,e.detail.position.latitude);
                contador = 0;
                });
        }
        },

    _loadPeaks: function(longitude,latitude){

        alert(longitude);

       /* const scale = 2000;
        fetch('https://www.hikar.org/fm/ws/bsvr.php?bbox=${longitude-0.1},${latitude-0.1},${longitude+0.1},${latitude+0.1}&outProj=4326&format=json&poi=natural')
        .then ( response => response.json())
        .then (json => {
            json.features.filter ( f => f.properties.natural == 'peak')
                .foreach ( peak => {
                    const entity = document.createElement('a-text');
                    entity.setAttribute('look-at', '[gps-projected-camera]');
                    entity.setAttribute('value', peak.properties.name);
                    entity.setAttribute('scale', {
                        x: scale,
                        y: scale,
                        z: scale
                    });
                    entity.setAttribute('gps-projected-antity-place', {
                        latitude: peak.geometry.coodinates[1],
                        longitude: peak.geometry.coordinates[0]
                    });
                    this.el.appendChild(entity);
                    console.log(peak.properties.name)
                });
        });*/
    }
})