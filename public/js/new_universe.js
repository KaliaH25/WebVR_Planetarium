'use strict';
//forces to use modern javascript

AFRAME.registerComponent('new_universe',{

    schema: {},
    init: function(){
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(){
            console.log('click');
            if (Context_AF.checkExists() == false){
               Context_AF.newUniverse();
             }
        });
    },
    checkExists: function(){
        const Context_AF = this;

        const ship = document.querySelector('#ship');
        const planet = document.querySelector('#planet');
        const astr = document.querySelector('#asteroid');
        
        var exists = true;

        if(astr==null){
            exists=false;
        }
        else{
            exists=true;
        }
        if(planet==null){
            exists=false;
        } 
        else{
            exists=true;
        }  
        if(ship==null){
            exists=false;
        } 
        else{
            exists=true;
        }  
        
        return exists;
    },
    
    newUniverse :function(){
      //creates new entities
        const Context_AF = this;

        console.log("making new universe");
        const scene = document.querySelector('a-scene');

        //--------------------CREATING SHIP---------------------
        
        
        let ship = document.createElement("a-entity");
        let pos=Context_AF.reversePosition(0,2,-4);
        //<a-entity id="ship" shine_light_beam obj-model="obj: #ship_mesh" material="src: #ship_mtl" position="0 2 -4" scale="1 1 1"></a-entity>
        ship.setAttribute("id","ship");
        ship.setAttribute("shine_light_beam",{});
        ship.setAttribute("obj-model",{obj:'#ship_mesh'});
        ship.setAttribute("material",{src:'#ship_mtl'});
        //ship.setAttribute("position",{x:0,y:2,z:-4});
        ship.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
        ship.setAttribute("scale",{x:1,y:1,z:1});
        scene.appendChild(ship);

        //--------------------CREATING PLANET---------------------
        let plnt = document.createElement("a-entity");
        /* <a-entity spin_sfx id="planet" obj-model="obj: #planet_mesh" material="src: #planet_mtl" position="0 0 -4">
                    <a-animation id="plntSpin" begin="click" attribute="rotation" from="0 0 0" to="0 360 0" dur="5000"></a-animation>
                </a-entity>*/
        pos=Context_AF.reversePosition(0,0,-4);
        plnt.setAttribute("id","planet");
        plnt.setAttribute("spin_sfx",{});
        plnt.setAttribute("obj-model",{obj:'#planet_mesh'});
        plnt.setAttribute("material",{src:'#planet_mtl'});
        plnt.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
        
        let anime = document.createElement('a-animation');
        //animation to play on creation
        anime.setAttribute("id","plntSpin")
        anime.setAttribute("attribute","rotation");
        anime.setAttribute("begin",'click');
        anime.setAttribute("from","0 0 0");
        anime.setAttribute("to","0 360 0");
        anime.setAttribute("dur",3000);
        //move ship towards blackhole 
        plnt.appendChild(anime);

        scene.appendChild(plnt);

        //--------------------CREATING ASTEROID---------------------
        let astr = document.createElement("a-entity");
         /* <a-entity spin_sfx id="asteroid"obj-model="obj: #astr_mesh" material="src: #astr_mtl" position="3 1 -4" scale="0.5 0.5 0.5">
                    <a-animation id="astrSpin" begin="click" attribute="rotation" from="0 0 0" to="0 -360 0" dur="3000"></a-animation>
                </a-entity> */
        pos=Context_AF.reversePosition(3,1,-4);
        astr.setAttribute("id","asteroid");
        astr.setAttribute("spin_sfx",{});
        astr.setAttribute("obj-model",{obj:'#astr_mesh'});
        astr.setAttribute("material",{src:'#astr_mtl'});
        astr.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z});
        astr.setAttribute("scale",{x:0.5,y:0.5,z:0.5 });

        let anime2 = document.createElement('a-animation');
        //animation to play on creation
        anime2.setAttribute("id","astrSpin")
        anime2.setAttribute("attribute","rotation");
        anime2.setAttribute("begin",'click');
        anime2.setAttribute("from","0 0 0");
        anime2.setAttribute("to","0 -360 0");
        anime2.setAttribute("dur",3000);
        //move ship towards blackhole 
        astr.appendChild(anime2);

        scene.appendChild(astr);

        //--------------------MOVE BLACKHOLE---------------------
        Context_AF.el.object3D.position.x *=-1; 
        Context_AF.el.object3D.position.y *=-1; 
        Context_AF.el.object3D.rotation.y *=-1;
       
    },
    headsOrTails:function(){
        let ranNum = Math.random() * (10-1) + 1;
    
        ranNum=Math.floor(ranNum);
        if(ranNum%2 == 0){
            return true;
        }
        else{
            return false;
        }
    },
    reversePosition: function(_x,_y,_z){
        //randomly reverses elements of position
        const Context_AF = this;
        _x = _x+Math.floor(Math.random()*(3-1)+1)
        _y = _y+Math.floor(Math.random()*(3-1)+1)
        
        if(Context_AF.headsOrTails()){   
            _x *=-1;
        }
        if(Context_AF.headsOrTails()){  
            _y*=-1;
        }
        if(Context_AF.headsOrTails()){
            _z -= 2;
        }

        return {x:_x,y:_y,z:_z};  
    }
});