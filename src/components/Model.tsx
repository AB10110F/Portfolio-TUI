import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AsciiCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const wireframe = new THREE.LineSegments(edges, material);
    scene.add(wireframe);

    const animate = () => {
      requestAnimationFrame(animate);

      wireframe.rotation.x += 0.01;
      wireframe.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      const contenedor = canvas.parentElement;
      if (contenedor) {
        camera.aspect = contenedor.clientWidth / contenedor.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
      }
    };

    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default AsciiCube;