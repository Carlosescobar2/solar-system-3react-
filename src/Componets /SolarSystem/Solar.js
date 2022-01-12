import { useEffect, useRef } from "react";
import * as THREE from "three";
import React from "react";

import { OrbitControls } from "./OrbitalControls";


import SunTexture from '../../Pictures/sunTextureReal.jpeg'
import { Group } from "three";
import { Mesh } from "three";

export const Solar = () => {

  const mountRef = useRef(null);
  

  useEffect(() => {

    let current = mountRef.current
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight)  , 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });
    // const controls = new OrbitControls(camera, renderer.domElement)

    const light = new THREE.DirectionalLight('white', .9)
    const ambientLight = new THREE.AmbientLight('white', .7)
    scene.add(light,ambientLight)
 
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.update()
    const loader = new THREE.TextureLoader();
    
    const textureLoader = loader.load(SunTexture)
    
    
    
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setClearColor('white')
    renderer.setSize( window.innerWidth, window.innerHeight / 2 );
    renderer.setClearColor(0x000000, 0);
    current.appendChild( renderer.domElement );
    
    let planet = new THREE.Group()

    const Sun = ()=> { 
      const geometry = new THREE.SphereGeometry( 3, 32,16 );
      const material = new THREE.MeshPhongMaterial( {color:'red', wireframe:true, bumpMap:textureLoader, bumpScale:1, side:THREE.DoubleSide} );
      const Mesh = new THREE.Mesh( geometry, material );
      scene.add(Mesh)
      return Mesh;
    }
    
  Sun()

    camera.position.z =10;

      var animate = function () {
        requestAnimationFrame( animate );
        renderer.render( scene, camera );
        planet.rotation.x += 0.01;
        planet.rotation.y += 0.01;
        planet.rotation.z += 0.01;
               
  


    }
    animate();


    let onWindowResize = function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( window.innerWidth, window.innerHeight );
    }

    window.addEventListener("resize", onWindowResize, false);

    // animate();

    return () => current.removeChild( renderer.domElement);
  }, []);

  return (
    <div className="Solar" ref={mountRef}>

    </div>
  );
}

export default Solar;


// const Solar = () => {

//     useEffect(() => {
      
//       var scene = new THREE.Scene();
//       var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//       var renderer = new THREE.WebGLRenderer();


//       const light = new THREE.DirectionalLight('white', .9)
//       const ambientLight = new THREE.AmbientLight('white', .7)
//       scene.add(light,ambientLight)

//       const controls = new OrbitControls(camera, renderer.domElement)
//        controls.update()
      
//       const loader = new THREE.TextureLoader();
      
//       const textureLoader = loader.load(SunTexture)



//       renderer.setSize( window.innerWidth, window.innerHeight );
      
//       document.body.appendChild( renderer.domElement );
      
//       const geometry = new THREE.SphereGeometry( 3, 32,16 );
//       const material = new THREE.MeshPhongMaterial( {color:'red', wireframe:true, bumpMap:textureLoader, bumpScale:1, side:THREE.DoubleSide} );
//       const sphere = new THREE.Mesh( geometry, material );
//       scene.add( sphere );
//       camera.position.z = 5;
      
//       var animate = function () {
//         requestAnimationFrame( animate );
//         sphere.rotation.x += 0.01;
//         sphere.rotation.y += 0.01;
       
  
//         renderer.render( scene, camera );
//       };
      
//       animate();
//     }, []);
  
//     return (
//       <div>
  
//       </div>
//     );
//   }
  
//   export default Solar;