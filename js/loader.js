AFRAME.registerComponent('object', {
    init: function() {
        this.loaded = false;
        const entity = document.createElement('a-box');
        entity.setAttribute('material', 'color:blue');
        this.el.appendChild(entity);
        }
    });
