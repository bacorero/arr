window.onload = ()=> {
    let scene = document.querySelector('a-scene');
    const entity = document.createElement('entity');
    entity.setAttribute('gps-projected-entity-place','latitude: 38.346464; longitude: -0.506308');
    entity.setAttribute('gltf-model','./assets/scene.gltf');
    entity.setAttribute('scale','0.1 0.1 0.1');
    
    scene.appendChild(entity);
}


