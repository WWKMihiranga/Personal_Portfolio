'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

type RobotSceneProps = {
  onLoadComplete: () => void
}

export default function RobotScene({ onLoadComplete }: RobotSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const robotRef = useRef<THREE.Group | null>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>(0)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Robot creation
    const createRobot = () => {
      const robotGroup = new THREE.Group()
      
      // Body
      const bodyGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.6)
      const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0x6693B2 })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      body.position.y = 0
      robotGroup.add(body)

      // Head
      const headGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6)
      const headMaterial = new THREE.MeshPhongMaterial({ color: 0xA9C8DA })
      const head = new THREE.Mesh(headGeometry, headMaterial)
      head.position.y = 0.9
      robotGroup.add(head)

      // Eyes
      const eyeGeometry = new THREE.SphereGeometry(0.08, 8, 8)
      const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xE57986 })
      
      const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      leftEye.position.set(-0.15, 0.95, 0.25)
      robotGroup.add(leftEye)
      
      const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial)
      rightEye.position.set(0.15, 0.95, 0.25)
      robotGroup.add(rightEye)

      // Arms
      const armGeometry = new THREE.CylinderGeometry(0.1, 0.1, 0.8)
      const armMaterial = new THREE.MeshPhongMaterial({ color: 0xA45F7B })
      
      const leftArm = new THREE.Mesh(armGeometry, armMaterial)
      leftArm.position.set(-0.5, 0.2, 0)
      leftArm.rotation.z = Math.PI / 6
      robotGroup.add(leftArm)
      
      const rightArm = new THREE.Mesh(armGeometry, armMaterial)
      rightArm.position.set(0.5, 0.2, 0)
      rightArm.rotation.z = -Math.PI / 6
      robotGroup.add(rightArm)

      return robotGroup
    }

    const robotGroup = createRobot()
    scene.add(robotGroup)
    robotRef.current = robotGroup

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    camera.position.z = 5

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      
      if (robotRef.current) {
        // Smooth robot following
        const targetX = mousePosition.current.x * 2
        const targetY = mousePosition.current.y * 2
        
        robotRef.current.position.x += (targetX - robotRef.current.position.x) * 0.05
        robotRef.current.position.y += (targetY - robotRef.current.position.y) * 0.05
        
        // Gentle rotation based on movement
        robotRef.current.rotation.y = targetX * 0.1
        robotRef.current.rotation.x = -targetY * 0.05
        
        // Idle animation
        robotRef.current.position.z = Math.sin(Date.now() * 0.001) * 0.1
      }
      
      renderer.render(scene, camera)
    }

    animate()
    onLoadComplete()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [onLoadComplete])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" />
}