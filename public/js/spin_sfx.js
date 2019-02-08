'use strict';
//forces to use modern javascript

AFRAME.registerComponent('spin_sfx',{

    schema: {},
    init: function(){
        const Context_AF = this;
        Context_AF.sfx = document.querySelector('#spin-sound');

        document.querySelector('#plntSpin').addEventListener('animationstart',function(){
            let sndPos = Context_AF.getPos();
            console.log("playsound?");
            Context_AF.sfx.setAttribute("position",sndPos);
            Context_AF.sfx.components['sound'].playSound();
            Context_AF.sfx.removeAttribute("position");

        });
        document.querySelector('#astrSpin').addEventListener('animationstart',function(){
            let sndPos = Context_AF.getPos();
            console.log("playsound?");
            Context_AF.sfx.setAttribute("position",sndPos);
            Context_AF.sfx.components['sound'].playSound();
            Context_AF.sfx.removeAttribute("position");

        });
    },
    getPos: function(){
        const Context_AF = this;
        let x,y,z; 

        x = Context_AF.el.getAttribute('position').x;
        y = Context_AF.el.getAttribute('position').y;
        z = Context_AF.el.getAttribute('position').z;
        let xyz = x.toString() + " "+ y.toString() + " " + z.toString();

        return xyz;
    }
});