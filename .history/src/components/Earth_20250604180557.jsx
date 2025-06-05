import { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()

  // Load textures
  const earthTexture = useLoader(THREE.TextureLoader, '/images/earth_nightmap.jpg')
  const cloudsTexture = useLoader(THREE.TextureLoader, 'public/images/earth_clouds.jpg')

  useFrame(() => {
    earthRef.current.rotation.y += 0.001
    cloudsRef.current.rotation.y += 0.0011
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
          transparent={true}
          opacity={0.4}
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
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
      </Canvas>
    </div>
  )
}
