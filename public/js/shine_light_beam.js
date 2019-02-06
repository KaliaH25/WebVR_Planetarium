'use strict';



//forces to use modern javascript

AFRAME.registerComponent('shine_light_beam',{

    schema: {},
    init: function(){
        const Context_AF = this;
        // define this for important reasons that i dont understand
        //Context_AF.funSound = document.querySelector('#funSound');

        Context_AF.el.addEventListener('click', function(){
            console.log('click');
            Context_AF.lightBeam();
            //Context_AF.funSound.components['sound'].playSound();
        });
    },
    lightBeam : function (){
        //lets create a cow and the world a better place :) 
        const Context_AF = this;

        
        
        let beam = document.createElement('a-cone'); //create a new element in memory
        //<a-cone color="tomato" radius-bottom="2" radius-top="0.5"></a-cone>
        beam.setAttribute('id',"beam");
        beam.setAttribute('color',"green");
        beam.setAttribute('radius-bottom',0.2);
        beam.setAttribute('radius-top',0.01);
        beam.setAttribute('position',{x:Context_AF.el.getAttribute('position').x, y:Context_AF.el.getAttribute('position').y, z:Context_AF.el.getAttribute('position').z});
        beam.setAttribute('material',{ transparency: "true",opacity: 0.5});
        beam.setAttribute('height',0);

        //append the light to the html
        const scene = document.querySelector('a-scene'); //finds scene in html
        scene.appendChild(beam); //appends it 

        let anime = document.createElement('a-animation');
        //attribute="rotation" from="0 0 0" to="0 360 0" dur="5000"
        anime.setAttribute("attribute","height");
        anime.setAttribute("from",0);
        anime.setAttribute("to",2);
        anime.setAttribute("dur",1000);
        
        //const cone= document.querySelector('a-cone'); //finds scene in html
        beam.appendChild(anime); //appends it
        
    }
});