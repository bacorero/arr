window.onload = ()=> {
    let scene = document.querySelector('a-scene');
    const entity = document.createElement('entity');
    entity.setAttribute('gps-projected-entity-place','latitude: 38.346771; longitude: -0.506523');
    entity.setAttribute('gltf-model','https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/aframe/examples/image-tracking/nft/trex/scene.gltf')
    entity.setAttribute('scale','0.1 0.1 0.1');
    
    scene.appendChild(entity);
}
