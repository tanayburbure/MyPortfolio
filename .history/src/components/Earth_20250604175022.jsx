import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function Earth(props) {
  const earthRef = useRef()
  const cloudsRef = useRef()
  
  // Load textures
  const [earthTexture, bumpMap, specularMap, cloudsTexture] = useTexture([
    '/images/earth_daymap.jpg',     // Replace with your texture paths
    '/images/earth_nightmap.jpg',  // Normal/bump map
    '/images/earth_specular_map.tif', // Specular map
    '/images/earth_clouds.jpg'      // Clouds texture
  ])

  // Animation loop
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    earthRef.current.rotation.y = elapsedTime / 6
    cloudsRef.current.rotation.y = elapsedTime / 5
  })

  return (
    <>
      {/* Earth sphere */}
      <mesh ref={earthRef} {...props}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          specular={new THREE.Color('grey')}
          shininess={5}
        />
      </mesh>
      
      {/* Clouds */}
      <mesh ref={cloudsRef} {...props} scale={[1.01, 1.01, 1.01]}>
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

export default function EarthScene() {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Canvas with Three.js scene */}
      <Canvas
        className="w-full h-full"
        camera={{ position: [0, 0, 2.5], fov: 45 }}
      >
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.1} />
        
        {/* Directional light for sunlight effect */}
        <directionalLight
          color={0xffffff}
          intensity={1.5}
          position={[5, 3, 5]}
          castShadow
        />
        
        {/* Stars in the background */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        
        {/* Earth with loading fallback */}
        <Suspense fallback={null}>
          <Earth position={[0, 0, 0]} />
        </Suspense>
        
        {/* Orbit controls for interaction */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </Canvas>
      
      {/* Overlay title */}
      <div className="absolute top-0 left-0 w-full p-8 text-center pointer-events-none">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">Earth 3D Model</h1>
        <p className="text-xl text-gray-300 mt-2">Interactive Three.js visualization</p>
      </div>
      
      {/* Controls info */}
      <div className="absolute bottom-4 left-0 w-full text-center text-gray-400 text-sm pointer-events-none">
        <p>Drag to rotate | Scroll to zoom | Right-click drag to pan</p>
      </div>
    </div>
  )
}