// EarthCanvas.jsx
"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture, Stars } from "@react-three/drei";

function Earth() {
  const [colorMap, normalMap, specularMap] = useTexture([
    "/textures/earth_daymap.jpg",
    "/textures/earth_normal.jpg",
    "/textures/earth_specular.jpg",
  ]);

  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        metalness={0.4}
        roughness={0.7}
      />
    </mesh>
  );
}

export default function EarthCanvas() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
