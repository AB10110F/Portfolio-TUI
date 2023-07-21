"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';



const AsciiCube = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null!);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas });
  
      const width = 380;
      const height = 400;
  
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
  
      renderer.setSize(width, height);
  
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        30,
        width / height,
        0.1,
        1000
      );
      camera.position.z = 5;
  
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
  
      const animate = () => {
        requestAnimationFrame(animate);
  
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
  
        renderer.render(scene, camera);
      };
  
      animate();
    }, []);
  
    return <canvas ref={canvasRef} />;
  };
  
  export default AsciiCube;