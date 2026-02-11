import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import * as THREE from 'three'

function DustParticles() {
  const count = 200
  const mesh = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = Math.random() * 10 - 2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    const posArray = mesh.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      posArray[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.001
      posArray[i * 3 + 1] += Math.cos(state.clock.elapsedTime + i * 0.5) * 0.0005
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#C9A227"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Desert() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[50, 50, 32, 32]} />
      <meshStandardMaterial color="#2C1B0E" roughness={1} />
    </mesh>
  )
}

function Sun() {
  return (
    <mesh position={[0, 3, -15]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color="#D4731A" />
    </mesh>
  )
}

export default function DesertScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#0D1B2A']} />
        <fog attach="fog" args={['#1A0F0A', 5, 30]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, -5]} intensity={0.8} color="#D4731A" />
        <pointLight position={[0, 3, -15]} intensity={2} color="#D4731A" distance={30} />

        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Sun />
        <Desert />
        <DustParticles />
      </Canvas>
    </div>
  )
}
