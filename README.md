# WebVR_Planetarium
IMD3901B Assignment 2
Multi-Device Interactions

Program Overview:

This web app puts you in a virtual planetarium of sorts. In this space you can: spin the planet and asteroid, activate the space ship’s transport beam, suck the system into a black hole, and reset the world. This VR app was designed with the computer and phone in mind, as the controls are based purely on touch. I chose to go with a space theme with this application as it allowed me to take full advantage of the 3D space. Objects can be suspended in air and gravity is self contained to the objects.  Touch (or hover with the mouse) the planet or asteroid to spin them. This is a simple visual flare, meant to evoke the idea that you are spinning the objects with your motion. I wanted to create a motion light-switch effect for the space ship, so I opted for a toggle system based on the mouse position. Activate the space ship by clicking it, and de-activate the beam by moving your mouse away or tapping your finger somewhere else in space. Lastly, touching/hovering over the black hole will absorb and remove all the objects in space. Performing the interaction again will transport you to a new universe, the other side of the black hole. In the new universe, the objects will be arranged differently but their interactions will be the same. I took influence from the “alternate universe on the other side of a black hole” sci-fi trop, as it provided a clean and logical way to remove and instantiate elements in the application. Each interaction will have a sound that plays, if you are using chrome or iOS you must first click somewhere in screen to disable the auto-mute function of the browser. 

Challenges:

The biggest challenge I faced was the manipulation component of this assignment. My initial plan was to be able to drag and drop objects into the black hole or throw the asteroid at the space ship to knock it away; however, the one component library I could find that allowed me to drag objects around in 3D space is no longer compatible with current versions of A-Frame (https://github.com/jesstelford/aframe-click-drag-component). I am not familiar with A-frame, nor am I versed enough with JavaScript to begin to either make my own component or try and get their component working. So, I had to re-work my ideas for manipulation in the webVR app. Even after doing so, because I lack knowledge of and practice with JavaScript, I would constantly run into errors with no clue of how to solve them. I spent an entire day trying to figure out why an animation wasn’t working. It was because I was setting a position attribute as a vec3 instead of a string. I found that a lot of the documentation isn’t helpful, as there aren’t a lot of examples for the functions/tags you can use in A-Frame. This entire assignment was a struggle of me knowing the logic of how to solve my problems, but not understanding the specific syntax that needed to be used. 

What went well:

I believe that even though I couldn’t implement the drag and drop component that I wanted, the animation I implemented into the app makes up for it. It still provides some fun feedback to basic interaction and was within the scope of my abilities to pull off. As well, the more I worked with my app, the higher my understanding of the syntax conventions became. Though it took me far too long, I was able to solve all the issues I ran into. My solution for instantiating virtual elements, the new universe concept, turned out nicely and exactly how I planned. 




