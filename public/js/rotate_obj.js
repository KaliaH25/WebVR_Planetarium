'use strict';
//forces to use modern javascript

AFRAME.registerComponent('roate_obj',{

    schema: {},
    init: function(){
        const Context_AF = this;
        // define this for important reasons that i dont understand
        //Context_AF.funSound = document.querySelector('#funSound');

        Context_AF.el.addEventListener('click', function(){
            console.log('click');
            Context_AF.rotateObj();
            //Context_AF.funSound.components['sound'].playSound();
        });
    }
})