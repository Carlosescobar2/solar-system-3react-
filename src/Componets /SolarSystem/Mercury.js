import { useEffect, useRef } from "react";
import * as THREE from "three";
import React from "react";

import { OrbitControls } from "./OrbitalControls";


const Mercury = () => {

    useEffect(() => {
      
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
      var renderer = new THREE.WebGLRenderer();


      const light = new THREE.DirectionalLight('white', .9)
      const ambientLight = new THREE.AmbientLight('white', .7)
      scene.add(light,ambientLight)

      const controls = new OrbitControls(camera, renderer.domElement)
       controls.update()
      
      const loader = new THREE.TextureLoader();
      
      const textureLoader = loader.load()



      renderer.setSize( window.innerWidth, window.innerHeight );
      
      document.body.appendChild( renderer.domElement );
      
      const geometry = new THREE.SphereGeometry( 1, 32,16 );
      const material = new THREE.MeshPhongMaterial( {color:'blue', wireframe:true, bumpMap:textureLoader, bumpScale:1, side:THREE.DoubleSide} );
      const sphere = new THREE.Mesh( geometry, material );
      scene.add( sphere );
      camera.position.z = 2;
      
      var animate = function () {
        requestAnimationFrame( animate );
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        // sphere.position.z = -10.7
        sphere.position.x = -3;
       
  
        renderer.render( scene, camera );
      };
      
      animate();
    }, []);
  
    return (
      <div>
  
      </div>
    );
  }
  
  export default Mercury;