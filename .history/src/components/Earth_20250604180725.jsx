import { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()

  // Load textures
  const earthTexture = useLoader(THREE.TextureLoader, 'public/images/earth_nightmap.jpg')

  useFrame(() => {
    earthRef.current.rotation.y += 0.001
  })

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial map={earthTexture} />
      </mesh>
    </>
  )
}

export default function SimpleEarth() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
      </Canvas>
    </div>
  )
}
