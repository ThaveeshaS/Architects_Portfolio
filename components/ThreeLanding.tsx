"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const ParticleImplosion = () => {
  const count = 1500; // Number of shards
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate random starting data for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // The Time Factor:
    // 0s - 5s: Chaos
    // 5s - 8s: Implosion (Snap to center)
    const time = state.clock.getElapsedTime();
    const isImploding = time > 3.5; // Start pulling in after 3.5 seconds

    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      
      // Update internal time of particle
      t = particle.t += speed / 2;
      
      // Math to make them swirl organically
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // TARGET POSITION
      // If imploding, target is (0,0,0). If not, target is swirling orbit.
      let targetX = (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10;
      let targetY = (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10;
      let targetZ = (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10;

      if (isImploding) {
         // Lerp towards 0,0,0 rapidly
         // The higher the divisor, the slower the snap. 
         // We use a decay based on time to make it accelerate.
         const snapSpeed = 0.05 + (time - 3.5) * 0.02; 
         targetX *= (1 - snapSpeed);
         targetY *= (1 - snapSpeed);
         targetZ *= (1 - snapSpeed);
      }

      // Apply positions
      dummy.position.set(targetX, targetY, targetZ);
      
      // Rotate shards randomly
      dummy.rotation.set(s * 5, s * 5, s * 5);
      
      // Scale down slightly as they implode
      const scale = isImploding ? Math.max(0.1, 1 - (time - 3.5) * 0.5) : 1;
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      {/* The Shape of the Shards (Tetrahedrons look jagged) */}
      <tetrahedronGeometry args={[0.5, 0]} />
      {/* The Material (Gold/Bronze) */}
      <meshStandardMaterial 
        color="#C19D75" 
        roughness={0.4} 
        metalness={0.8} 
      />
    </instancedMesh>
  );
};

const ThreeLanding = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 40], fov: 60 }}>
        {/* Cinematic Lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[100, 100, 100]} intensity={2} color="#C19D75" />
        <pointLight position={[-100, -100, -100]} intensity={1} color="blue" />
        
        {/* Floating Animation Wrapper */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
           <ParticleImplosion />
        </Float>
        
        {/* Environment Reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default ThreeLanding;