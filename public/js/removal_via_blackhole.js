'use strict';
//forces to use modern javascript

AFRAME.registerComponent('removal_via_blackhole',{

    schema: {},
    init: function(){
        const Context_AF = this;

        Context_AF.sfx = document.querySelector('#absorbed-sound');

        Context_AF.el.addEventListener('click', function(){
            console.log('click');
            if (Context_AF.checkExists() == true){
                Context_AF.sfx.components['sound'].playSound();
                Context_AF.absorbedShipAnime();
                Context_AF.sfx.components['sound'].playSound();
                Context_AF.absorbedPlntAnime();
                Context_AF.sfx.components['sound'].playSound();
                Context_AF.absorbedAstrAnime();
                
                        
                document.querySelector('#shipAbsorbedAnimation').addEventListener('animationend',function(){
                    const ship = document.querySelector('#ship');
                    ship.parentNode.removeChild(ship);
                    console.log("ship removed");
                });
                document.querySelector('#plntAbsorbedAnimation').addEventListener('animationend',function(){
                    const planet = document.querySelector('#planet');
                    planet.parentNode.removeChild(planet);
                    console.log("planet removed");
                });
                document.querySelector('#astrAbsorbedAnimation').addEventListener('animationend',function(){
                    const astr= document.querySelector('#asteroid');
                    astr.parentNode.removeChild(astr);
                    console.log("asteroid removed");
                });
             }
        });
    },
    checkExists: function(){
        const Context_AF = this;
        const ship = document.querySelector('#ship');
        if(ship==null){
            return false;
        }
        const planet = document.querySelector('#planet');
        if(planet==null){
            return false;
        }
        const astr = document.querySelector('#asteroid');
        if(astr==null){
            return false;
        }

        return true;
    },
    absorbedShipAnime: function(){
        const Context_AF = this;
        let x,y,z; 

        x = Context_AF.el.getAttribute('position').x;
        y = Context_AF.el.getAttribute('position').y;
        z = Context_AF.el.getAttribute('position').z;
        let xyzHole = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz of black hole

        
        const ship = document.querySelector('#ship');
        if(ship==null){
            return;
        }

        x = ship.getAttribute('position').x;
        y = ship.getAttribute('position').y;
        z = ship.getAttribute('position').z;
        let xyzShip = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz ship position 
        
        let animeMove = document.createElement('a-animation');
        //animation to play on creation
        animeMove.setAttribute("attribute","position");
        animeMove.setAttribute("begin",500);
        animeMove.setAttribute("from",xyzShip);
        animeMove.setAttribute("to",xyzHole);
        animeMove.setAttribute("dur",1000);
        //move ship towards blackhole 
        ship.appendChild(animeMove);

        let animeScale1 = document.createElement('a-animation');
        //animation to play on creation
        animeScale1.setAttribute("attribute","scale");
        animeScale1.setAttribute("from","1 1 1");
        animeScale1.setAttribute("to","2 0.5 0.5");
        animeScale1.setAttribute("dur",1000);
        //scale ship to pancake
        ship.appendChild(animeScale1);

        let animeScale2 = document.createElement('a-animation');
        //animation to play on creation
        animeScale2.setAttribute("id","shipAbsorbedAnimation");
        animeScale2.setAttribute("attribute","scale");
        animeScale2.setAttribute("begin",1000);
        animeScale2.setAttribute("from","2 0.5 0.5");
        animeScale2.setAttribute("to","0 0 0");
        animeScale2.setAttribute("dur",500);
        //scale ship to nothing
        ship.appendChild(animeScale2);
             
    },

    absorbedPlntAnime: function(){
        const Context_AF = this;
        let x,y,z; 

        x = Context_AF.el.getAttribute('position').x;
        y = Context_AF.el.getAttribute('position').y;
        z = Context_AF.el.getAttribute('position').z;
        let xyzHole = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz of black hole

        
        const planet = document.querySelector('#planet');
        if(planet==null){
            return;
        }

        x = planet.getAttribute('position').x;
        y = planet.getAttribute('position').y;
        z = planet.getAttribute('position').z;
        let xyzPlanet = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz of planet

        let animeMove = document.createElement('a-animation');
        //animation to play on creation
        animeMove.setAttribute("attribute","position");
        animeMove.setAttribute("begin",1000);
        animeMove.setAttribute("from",xyzPlanet);
        animeMove.setAttribute("to",xyzHole);
        animeMove.setAttribute("dur",1000);
        //move ship towards blackhole 
        planet.appendChild(animeMove);

        let animeScale1 = document.createElement('a-animation');
        //animation to play on creation
        animeScale1.setAttribute("attribute","scale");
        animeScale1.setAttribute("begin",500);
        animeScale1.setAttribute("from","1 1 1");
        animeScale1.setAttribute("to","2 0.5 0.5");
        animeScale1.setAttribute("dur",1000);
        //scale ship to pancake
        planet.appendChild(animeScale1);

        let animeScale2 = document.createElement('a-animation');
        //animation to play on creation
        animeScale2.setAttribute("id","plntAbsorbedAnimation");
        animeScale2.setAttribute("attribute","scale");
        animeScale2.setAttribute("begin",1500);
        animeScale2.setAttribute("from","2 0.5 0.5");
        animeScale2.setAttribute("to","0 0 0");
        animeScale2.setAttribute("dur",500);
        //scale ship to nothing
        planet.appendChild(animeScale2);        
    },

    absorbedAstrAnime: function(){
        const Context_AF = this;
        let x,y,z; 

        x = Context_AF.el.getAttribute('position').x;
        y = Context_AF.el.getAttribute('position').y;
        z = Context_AF.el.getAttribute('position').z;
        let xyzHole = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz of black hole

        
        const astr = document.querySelector('#asteroid');
        if(astr==null){
            return;
        }
      
        x = astr.getAttribute('position').x;
        y = astr.getAttribute('position').y;
        z = astr.getAttribute('position').z;
        let xyzAstr = x.toString() + " "+ y.toString() + " " + z.toString();
        //get xyz ship position 
        
        let animeMove = document.createElement('a-animation');
        //animation to play on creation
        animeMove.setAttribute("attribute","position");
        animeMove.setAttribute("begin",1500);
        animeMove.setAttribute("from",xyzAstr);
        animeMove.setAttribute("to",xyzHole);
        animeMove.setAttribute("dur",1000);
        //move ship towards blackhole 
        astr.appendChild(animeMove);

        let animeScale1 = document.createElement('a-animation');
        //animation to play on creation
        animeScale1.setAttribute("attribute","scale");
        animeScale1.setAttribute("begin",1500);
        animeScale1.setAttribute("from","0.5 0.5 0.5");
        animeScale1.setAttribute("to","1 0.2 0.2");
        animeScale1.setAttribute("dur",1000);
        //scale ship to pancake
        astr.appendChild(animeScale1);

        let animeScale2 = document.createElement('a-animation');
        //animation to play on creation
        animeScale2.setAttribute("id","astrAbsorbedAnimation");
        animeScale2.setAttribute("attribute","scale");
        animeScale2.setAttribute("begin",2000);
        animeScale2.setAttribute("from","1 0.2 0.2");
        animeScale2.setAttribute("to","0 0 0");
        animeScale2.setAttribute("dur",500);
        //scale ship to nothing
        astr.appendChild(animeScale2);
                
    }
    
});