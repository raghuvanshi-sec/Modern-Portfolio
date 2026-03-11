import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas3D = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas3D, alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xe8ff00, wireframe: true, transparent: true, opacity: 0.12 });
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 1200; // Increased particle count for the whole page
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      // Widen the distribution to cover more screen area
      posArray[i * 3] = (Math.random() - 0.5) * 20;     // x
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xe8ff00,
      transparent: true,
      opacity: 0.3
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX3D = 0;
    let mouseY3D = 0;
    const onMouseMove = (event) => {
      mouseX3D = event.clientX / window.innerWidth - 0.5;
      mouseY3D = event.clientY / window.innerHeight - 0.5;
    };
    document.addEventListener('mousemove', onMouseMove);

    // Add scroll tracking to tie 3D camera to user scroll position
    let scrollY = window.scrollY;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    let animationFrameId;
    const animate3D = () => {
      animationFrameId = requestAnimationFrame(animate3D);
      
      // Base rotation
      object.rotation.x += 0.002;
      object.rotation.y += 0.003;
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Mouse parallax
      scene.rotation.x += (mouseY3D * 0.5 - scene.rotation.x) * 0.05;
      scene.rotation.y += (mouseX3D * 0.5 - scene.rotation.y) * 0.05;

      // Scroll parallax (moves the camera down as the user scrolls down)
      camera.position.y = -(scrollY / window.innerHeight) * 1.5;

      renderer.render(scene, camera);
    };
    animate3D();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0, 
        pointerEvents: 'none', 
        opacity: 0.6 
      }}
    />
  );
};

export default Background3D;
