"use client";

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()

  const earthTexture = useLoader(THREE.TextureLoader, 'public/images/earth_nightmap.jpg')
  const cloudsTexture = useLoader(THREE.TextureLoader, 'public/images/earth_clouds.jpg')

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

useFrame(() => {
  const rotationY = scrollY * 0.0005 + Math.PI/4
  if (earthRef.current && cloudsRef.current) {
    earthRef.current.rotation.y = rotationY
    cloudsRef.current.rotation.y = rotationY * 1.05
  }
})

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial map={earthTexture} />
      </mesh>

      <mesh ref={cloudsRef} scale={1.02}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent
          opacity={0.05}  // Minimal clouds
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

export default function SimpleEarth() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />
        <Earth />
      </Canvas>
    </div>
  )
}
