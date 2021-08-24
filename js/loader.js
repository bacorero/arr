window.onload = ()=> {
    let scene = document.querySelector('a-scene');
    const entity = document.createElement('entity');
    entity.setAttribute('gps-projected-entity-place','latitude: 38.346771; longitude: -0.506523');
    entity.setAttribute('gltf-model','./assets/articuno/scene.gltf');
    entity.setAttribute('scale','0.1 0.1 0.1');
    
    scene.appendChild(entity);
}


