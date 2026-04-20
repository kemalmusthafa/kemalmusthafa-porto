"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const FloatingShapes = () => {
  const letterRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const px = state.pointer.x * 0.45;
    const py = state.pointer.y * 0.3;

    if (letterRef.current) {
      letterRef.current.rotation.x = py * 0.2;
      letterRef.current.rotation.y = t * 0.25 + px * 0.35;
      letterRef.current.rotation.z = Math.sin(t * 0.6) * 0.06;
      letterRef.current.position.x = px * 0.55;
      letterRef.current.position.y = 0.1 + py * 0.35;
    }
  });

  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} color="#c8ff00" />
      <pointLight position={[-2, -1, 2]} intensity={1.5} color="#9ff000" />

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
        <group ref={letterRef} position={[0, 0.1, 0]}>
          {/* K stem */}
          <mesh position={[-0.45, 0, 0]}>
            <boxGeometry args={[0.42, 1.95, 0.45]} />
            <meshStandardMaterial
              color="#b4e100"
              emissive="#7fa100"
              emissiveIntensity={0.22}
              roughness={0.24}
              metalness={0.6}
            />
          </mesh>

          {/* K upper arm */}
          <mesh position={[0.15, 0.45, 0.06]} rotation={[0, 0, -0.75]}>
            <boxGeometry args={[0.36, 1.38, 0.45]} />
            <meshStandardMaterial
              color="#c8ff00"
              emissive="#8fb600"
              emissiveIntensity={0.24}
              roughness={0.22}
              metalness={0.62}
            />
          </mesh>

          {/* K lower arm */}
          <mesh position={[0.16, -0.46, -0.06]} rotation={[0, 0, 0.78]}>
            <boxGeometry args={[0.36, 1.42, 0.45]} />
            <meshStandardMaterial
              color="#9fcb00"
              emissive="#739100"
              emissiveIntensity={0.22}
              roughness={0.26}
              metalness={0.58}
            />
          </mesh>

        </group>
      </Float>
    </>
  );
};

export const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 -z-10 opacity-85 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 50 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
