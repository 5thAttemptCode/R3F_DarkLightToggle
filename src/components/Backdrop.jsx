

export default function Backdrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="white" />
    </mesh>
  )
}
