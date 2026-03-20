import React, { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei'

function FloatingIcosahedron() {
  const meshRef = useRef()
  const { pointer } = useThree()

  useFrame((_, delta) => {
    if (!meshRef.current) return
    // Gently follow mouse
    meshRef.current.rotation.x += (pointer.y * 0.4 - meshRef.current.rotation.x) * 2 * delta
    meshRef.current.rotation.y += (pointer.x * 0.6 - meshRef.current.rotation.y) * 2 * delta
  })

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.5}>
      <Icosahedron ref={meshRef} args={[1.6, 4]}>
        <MeshDistortMaterial
          color="#8245ec"
          emissive="#5a1eab"
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.8}
          distort={0.35}
          speed={2}
          transparent
          opacity={0.85}
        />
      </Icosahedron>
    </Float>
  )
}

const ThreeDCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8245ec" />
      <FloatingIcosahedron />
    </Canvas>
  )
}

export default ThreeDCanvas
