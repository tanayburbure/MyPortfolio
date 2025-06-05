import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()

  useFrame(() => {
    earthRef.current.rotation.y += 0.001
    cloudsRef.current.rotation.y += 0.0011
  })

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial color={0x0a1a3a} />
      </mesh>
      
      <mesh ref={cloudsRef} scale={1.02}>
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

export default function SimpleEarth() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Earth />
      </Canvas>
    </div>
  )
}