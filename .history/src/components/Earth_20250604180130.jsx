import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  const [texturesLoaded, setTexturesLoaded] = useState(false)
  
  // Fallback colors if textures fail to load
  const nightColor = 0x0a1a3a // Dark blue
  const cloudsColor = 0xffffff // White

  useEffect(() => {
    const loader = new TextureLoader()
    
    // Working texture URLs
    const nightMapUrl = 'https://assets.codepen.io/127738/earth_night_2048.jpg'
    const cloudsUrl = 'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'
    
    // Load textures with error handling
    Promise.all([
      loader.loadAsync(nightMapUrl).catch(() => null),
      loader.loadAsync(cloudsUrl).catch(() => null)
    ]).then(() => setTexturesLoaded(true))
  }, [])

  useFrame(() => {
    if (!earthRef.current) return
    // Slow automatic rotation
    earthRef.current.rotation.y += 0.001
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0011
  })

  if (!texturesLoaded) return null // Or return a loading fallback

  return (
    <>
      {/* Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial 
          color={nightColor}
          // Only apply texture if loaded
          {...(texturesLoaded && { map: nightMap })}
        />
      </mesh>
      
      {/* Clouds layer */}
      <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial 
          color={cloudsColor}
          transparent={true}
          opacity={0.3}
          {...(texturesLoaded && { map: cloudsTexture })}
        />
      </mesh>
    </>
  )
}

export default function SimpleEarth() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas 
        camera={{ position: [0, 0, 2], fov: 45 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000) // Black background
        }}
      >
        <ambientLight intensity={0.3} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  )
}