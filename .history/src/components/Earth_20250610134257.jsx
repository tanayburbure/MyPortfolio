"use client";

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const earthTexture = useLoader(THREE.TextureLoader, '/images/earth_nightmap.jpg')
  const cloudsTexture = useLoader(THREE.TextureLoader, '/images/earth_clouds.jpg')

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(() => {
    const rotationY = scrollY * (isMobile ? 0.0002 : 0.0005) + Math.PI/2.5
    if (earthRef.current && cloudsRef.current) {
      earthRef.current.rotation.y = rotationY
      cloudsRef.current.rotation.y = rotationY * (isMobile ? 1.02 : 1.09)
    }
  })

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[isMobile ? 0.8 : 1, 64, 64]} />
        <meshPhongMaterial map={earthTexture} />
      </mesh>

      <mesh ref={cloudsRef} scale={isMobile ? 1.01 : 1.02}>
        <sphereGeometry args={[isMobile ? 0.8 : 1, 64, 64]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent
          opacity={isMobile ? 0.08 : 0.1}  // Slightly less opacity on mobile
          depthWrite={false}
        />
      </mesh>
    </>
  )
}

export default function SimpleEarth() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // lg breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="w-full h-[50vh] lg:h-screen bg-[#0D0D0D]">
      <Canvas camera={{ position: [0, 0, isMobile ? 2.5 : 2] }}>
        <ambientLight intensity={isMobile ? 0.7 : 0.6} />
        <pointLight position={[5, 5, 5]} />
        <Earth />
      </Canvas>
    </div>
  )
}