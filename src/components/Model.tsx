import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Sphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    camera.position.z = 5;
    camera.rotateZ(-0.2);

    const geometry = new THREE.SphereGeometry(1, 22, 22, 0, Math.PI * 2, 0, Math.PI * 2);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const sphere = new THREE.LineSegments(edges, material);
    scene.add(sphere);
    /* sphere.rotation.z = 10 */

    const animate = () => {
      requestAnimationFrame(animate);

      /* sphere.rotation.x += 0.01; */
      sphere.rotation.y += 0.01;

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

export default Sphere;