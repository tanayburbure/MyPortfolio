import { useRef, useEffect, useState, Suspense } from 'react' // Added Suspense import
import { Canvas, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  
  // Working texture URLs
  const nightMapUrl = 'https://assets.codepen.io/127738/earth_night_2048.jpg'
  const cloudsUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'

  // Load textures
  const [nightMap, cloudsTexture] = useLoader(TextureLoader, [nightMapUrl, cloudsUrl])

  useFrame(() => {
    earthRef.current.rotation.y += 0.001
    cloudsRef.current.rotation.y += 0.0011
  })

  return (
    <>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial map={nightMap} />
      </mesh>
      
      <mesh ref={cloudsRef} scale={1.02}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial 
          map={cloudsTexture}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
    </>
  )
}

export default function SimpleEarth() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}> {/* Now properly imported */}
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}