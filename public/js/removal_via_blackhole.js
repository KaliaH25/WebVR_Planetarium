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
        let x,y,z; 

        x = Context_AF.el.getAttribute('position').x;
        y = Context_AF.el.getAttribute('position').y;
        z = Context_AF.el.getAttribute('position').z;
        let xyzHole = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz of black hole

        
        const ship = document.querySelector('#ship');
        x = ship.getAttribute('position').x;
        y = ship.getAttribute('position').y;
        z = ship.getAttribute('position').z;
        let xyzShip = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz ship position 
        
        const planet = document.querySelector('#planet');
        x = planet.getAttribute('position').x;
        y = planet.getAttribute('position').y;
        z = planet.getAttribute('position').z;
        let xyzPlanet = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz of planet

        const astr = document.querySelector('#asteroid');
        let x = astr.getAttribute('position').x;
        let y = astr.getAttribute('position').y;
        let z = astr.getAttribute('position').z;
        let xyzAstr = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz ship position 
        
        let animeMove = document.createElement('a-animation');
        //animation to play on creation
        animeMove.setAttribute("attribute","position");
        animeMove.setAttribute("id","moveship");
        animeMove.setAttribute("from",xyzShip);
        animeMove.setAttribute("to",xyzHole);
        animeMove.setAttribute("dur",2000);
        //move ship towards blackhole 
        ship.appendChild(animeMove);

        let animeScale = document.createElement('a-animation');
        //animation to play on creation
        animeScale.setAttribute("attribute","scale");
        animeScale.setAttribute("id","scaleship");
        animeScale.setAttribute("from","1 1 1");
        animeScale.setAttribute("to","2 1 1");
        animeScale.setAttribute("dur",1000);
        //move ship towards blackhole 
        ship.appendChild(anime);
        
        
    }
    
});