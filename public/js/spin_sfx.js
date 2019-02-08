'use strict';
//forces to use modern javascript

AFRAME.registerComponent('spin_sfx',{

    schema: {},
    init: function(){
        const Context_AF = this;
        Context_AF.sfx = document.querySelector('#spin-sound');

        document.querySelector('#plntSpin').addEventListener('animationstart',function(){
    },
});