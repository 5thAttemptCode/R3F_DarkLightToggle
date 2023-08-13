import React from 'react'

export default function Sphere() {
  return (
    <mesh>
        <sphereGeometry attach="geometry" args={[1, 64, 64]} />
        <meshStandardMaterial attach="material" color="white"  roughness={0.1} metalness={0.1} />
    </mesh>
  )
}
