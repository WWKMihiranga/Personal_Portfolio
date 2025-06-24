// 'use client'
// import { useRef } from 'react'
// import { useFrame } from '@react-three/fiber'
// import { Mesh } from 'three'

// export default function ThreeScene() {
//   const meshRef = useRef<Mesh>(null)

//   // Animation loop
//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01
//       meshRef.current.rotation.x += 0.005
//     }
//   })

//   return (
//     <mesh ref={meshRef} position={[0, 0, 0]}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="#3b82f6" />
//     </mesh>
//   )
// }
