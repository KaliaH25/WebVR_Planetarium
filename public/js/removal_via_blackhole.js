'use strict';
//forces to use modern javascript

AFRAME.registerComponent('removal_via_blackhole',{

    schema: {},
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(){
            console.log('click');
            Context_AF.absorbedAnimation();
            //document.querySelector('#ship').emit('moving');
           // const ship = document.querySelector('#ship');
            //console.log("x:"+ ship.getAttribute('position').x + "y:"+ ship.getAttribute('position').y +"z:" + ship.getAttribute('position').z);

            document.querySelector('#moveship').addEventListener('animationstart',function(){
                console.log("ship moving");
            });
            document.querySelector('#moveship').addEventListener('animationend',function(){
                console.log("ship moved");
                //console.log("x:" + ship.getAttribute('position').x + "y:" + ship.getAttribute('position').y + "z:" + ship.getAttribute('position').z);

            });

           // console.log("ship absorbed");
            //Context_AF.Upsfx.components['sound'].playSound();
            //document.querySelector('#removingBeam').addEventListener('animationend',function(){
                //Context_AF.removeLightBeam();
            //});
        });
    },

    absorbedAnimation: function(){
        const Context_AF = this;

        //move ship towards blackhole 
        const ship = document.querySelector('#ship');
        console.log(Context_AF.el.getAttribute('position').x);
        let x = Context_AF.el.getAttribute('position').x;
        let y = Context_AF.el.getAttribute('position').y;
        let z = Context_AF.el.getAttribute('position').z;
        let xyz = toString(x) + "  y";
        //find out why these are suddenly undefined
        console.log(xyz);

        
        //let pos = Context_AF.el.getAttribute('position');
        let anime = document.createElement('a-animation');
        //animation to play on creation
        anime.setAttribute("attribute","position");
        anime.setAttribute("id","moveship");
        //anime.setAttribute("begin","move");
        //anime.setAttribute("from",{x:ship.getAttribute('position').x,y:ship.getAttribute('position').y,z:ship.getAttribute('position').z});
        anime.setAttribute("from",ship.getAttribute('position'));
        anime.setAttribute("to","0 0 0");
        //anime.setAttribute("to",{x:Context_AF.el.getAttribute('position').x, y:Context_AF.el.getAttribute('position').y, z:Context_AF.el.getAttribute('position').z});
        anime.setAttribute("dur",1000);
        
        ship.appendChild(anime);
        
        //ship.emit("move");
    }
    
});