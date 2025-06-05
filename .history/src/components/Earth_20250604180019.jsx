import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(() => {
    earthRef.current.rotation.y += 0.001
    cloudsRef.current.rotation.y += 0.0011
  })

  return (
    <>
      {/* Solid color earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial 
          color={0x0a1a3a} // Dark blue
          emissive={0x052055} // Subtle glow
          shininess={5}
        />
      </mesh>
      
      {/* Simple clouds */}
      <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial 
          color={0xffffff} 
          transparent={true}
          opacity={0.15}
        />
      </mesh>
    </>
  )
}