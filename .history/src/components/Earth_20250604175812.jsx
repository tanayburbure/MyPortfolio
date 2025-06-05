import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  
  // Load only night map and clouds texture
  const [nightMap, cloudsTexture] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_nightmap.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'
  ])

  // Scroll-based rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const rotationY = scrollY * 0.001 // Adjust rotation speed
      if (earthRef.current) {
        earthRef.current.rotation.y = rotationY
        cloudsRef.current.rotation.y = rotationY * 1.1 // Slightly faster rotation for clouds
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Earth with night map */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial map={nightMap} />
      </mesh>
      
      {/* Clouds (slightly larger and transparent) */}
      <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
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
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <Earth />
      </Canvas>
    </div>
  )
}