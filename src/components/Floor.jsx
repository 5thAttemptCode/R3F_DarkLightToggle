

export default function Floor() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[50, 10]} />
        <meshStandardMaterial color="white" />
    </mesh>
  )
}
