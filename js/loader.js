window.onload = ()=> {
    let scene = document.querySelector('a-scene');
    const entity = document.createElement('entity');
    entity.setAttribute('gps-projected-entity-place','latitude: 38.346464; longitude: -0.506308');
    entity.setAttribute('gltf-model','url(./assets/scene.gltf)');
    entity.setAttribute('scale','3 3 3');
    
    scene.appendChild(entity);
}


