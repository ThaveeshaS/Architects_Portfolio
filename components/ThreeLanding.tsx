"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing"; 
import * as THREE from "three";

// --- Particle Implosion Component (Same as before, optimized) ---
const ParticleImplosion = () => {
  const count = 1200; // Optimized for mobile
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random starting data
  const particles = useMemo(() => {
    const temp = [];
    const colors = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -40 + Math.random() * 80;
      const yFactor = -40 + Math.random() * 80;
      const zFactor = -40 + Math.random() * 80;
      
      const mix = Math.random();
      if (mix > 0.8) colors.push(1, 1, 1); 
      else colors.push(0.75, 0.61, 0.45); 

      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return { data: temp, colors: new Float32Array(colors) };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const isImploding = time > 1.5; 

    particles.data.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;

      const s = Math.cos(t);
      const orbit = (t / 10) * factor;

      let targetX = xFactor + Math.cos(orbit) + (Math.sin(t) * factor) / 10;
      let targetY = yFactor + Math.sin(orbit) + (Math.cos(t * 2) * factor) / 10;
      let targetZ = zFactor + Math.cos(orbit) + (Math.sin(t * 3) * factor) / 10;

      if (isImploding) {
         const snapSpeed = 0.05 + (time - 1.5) * 0.04; 
         targetX *= (1 - snapSpeed);
         targetY *= (1 - snapSpeed);
         targetZ *= (1 - snapSpeed);

         // Reduced mouse interaction on mobile
         targetX += (state.mouse.x * 2);
         targetY += (state.mouse.y * 2);
      } else {
         targetX += (state.mouse.x * 5);
         targetY += (state.mouse.y * 5);
      }

      dummy.position.set(targetX, targetY, targetZ);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      
      const scale = isImploding ? Math.max(0.1, 1 - (time - 1.5) * 0.5) : 1;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <tetrahedronGeometry args={[0.3, 0]}>
         <instancedBufferAttribute 
            attach="attributes-color" 
            args={[particles.colors, 3]} 
          />
      </tetrahedronGeometry>
      <meshStandardMaterial 
        vertexColors 
        roughness={0.2} 
        metalness={1} 
        toneMapped={false} 
        emissive="#C19D75" 
        emissiveIntensity={0.5} 
      />
    </instancedMesh>
  );
};

const ThreeLanding = () => {
  // Responsive Camera Distance
  const [cameraZ, setCameraZ] = useState(40);

  useEffect(() => {
    const handleResize = () => {
        // If width < 768 (Mobile), move camera back to 60
        // Else use 40
        setCameraZ(window.innerWidth < 768 ? 60 : 40);
    };

    // Set initial
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas 
        camera={{ position: [0, 0, cameraZ], fov: 60 }} // Dynamic Camera Z
        dpr={[1, 1.5]} // Performance limit for mobile
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[100, 100, 100]} intensity={1.5} color="#C19D75" />
        <pointLight position={[-100, -100, -100]} intensity={1} color="#4c6687" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
           <ParticleImplosion />
        </Float>
        
        <EffectComposer enableNormalPass={false}>
           <Bloom 
             luminanceThreshold={0.2} 
             mipmapBlur               
             intensity={1.2}          
             radius={0.5}
           />
        </EffectComposer>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeLanding;