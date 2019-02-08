'use strict';
//forces to use modern javascript

AFRAME.registerComponent('shine_light_beam',{

    schema: {},
    init: function(){
        const Context_AF = this;
    
        Context_AF.Upsfx = document.querySelector('#beamUp-sound');
        Context_AF.Dwnsfx = document.querySelector('#beamDown-sound');

        Context_AF.el.addEventListener('click', function(){
            console.log('click');
            Context_AF.createLightBeam();
            Context_AF.Upsfx.components['sound'].playSound();
        });
        Context_AF.el.addEventListener('mouseleave',function(){
            console.log('mouseLeave');
            Context_AF.playRemoveAnimation();
            Context_AF.Dwnsfx.components['sound'].playSound();
            document.querySelector('#removingBeam').addEventListener('animationend',function(){
                Context_AF.removeLightBeam();
            });
        });
    },
    createLightBeam : function (){
        //creates cone to act as light beam
        const Context_AF = this;

        let beam = document.createElement('a-cone'); //create a new element in memory
        
        beam.setAttribute('id',"beam");
        beam.setAttribute('color',"green");
        beam.setAttribute('radius-bottom',0.2);
        beam.setAttribute('radius-top',0.01);
        beam.setAttribute('position',{x:Context_AF.el.getAttribute('position').x, y:Context_AF.el.getAttribute('position').y, z:Context_AF.el.getAttribute('position').z});
        beam.setAttribute('material',{ transparency: "true",opacity: 0.5});
        beam.setAttribute('height',0);
        //beam.setAttribute('remove-light',{});//component to delete self

        //append the light to the html
        const scene = document.querySelector('a-scene'); //finds scene in html
        scene.appendChild(beam); //appends it 

        let anime = document.createElement('a-animation');
        //animation to play on creation
        anime.setAttribute("attribute","height");
        anime.setAttribute("from",0);
        anime.setAttribute("to",2);
        anime.setAttribute("dur",1000);
        
        
        beam.appendChild(anime); //appends it
        
    },

    removeLightBeam: function(){
        const beam = document.querySelector('#beam');//save beam 
        beam.parentNode.removeChild(beam);//remove beam from scene
        console.log('Item removed');

    },
    playRemoveAnimation:function(){
        const Context_AF = this;

        const beam = document.querySelector('#beam');//save beam 
        
        let anime = document.createElement('a-animation');
        //animation to play on removal
        anime.setAttribute('id','removingBeam')
        anime.setAttribute("attribute","height");
        anime.setAttribute("from",2);
        anime.setAttribute("to",0);
        anime.setAttribute("dur",1000);

        beam.appendChild(anime);
        
    }
});