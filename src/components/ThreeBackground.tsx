import { useEffect, useRef, useCallback, useState } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const animationRef = useRef<number | null>(null);
  const floatingElementsRef = useRef<THREE.Mesh[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize color scheme state
  const getInitialColorScheme = () => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light"; // Default to light mode on server
  };

  const colorSchemeRef = useRef<"light" | "dark">(getInitialColorScheme());

  const initThreeScene = useCallback(() => {
    if (!canvasRef.current || !isMounted) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating geometric shapes
    const geometry = new THREE.IcosahedronGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: colorSchemeRef.current === "dark" ? 0x000000 : 0x6693b2,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Additional floating elements
    const smallGeometry = new THREE.TetrahedronGeometry(0.5);
    const smallMaterial = new THREE.MeshBasicMaterial({
      color: colorSchemeRef.current === "dark" ? 0xff00ff : 0xe57986,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    const floatingElements: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const element = new THREE.Mesh(smallGeometry, smallMaterial);
      element.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );
      scene.add(element);
      floatingElements.push(element);
    }

    camera.position.z = 5;

    sceneRef.current = scene;
    rendererRef.current = renderer;
    sphereRef.current = sphere;
    floatingElementsRef.current = floatingElements;

    // Only add event listeners on client side
    const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (e: MediaQueryListEvent) => {
      colorSchemeRef.current = e.matches ? "dark" : "light";

      if (sphereRef.current) {
        const material = sphereRef.current.material as THREE.MeshBasicMaterial;
        material.color.setHex(e.matches ? 0x00ff00 : 0x6693b2);
      }

      floatingElementsRef.current.forEach((element) => {
        const material = element.material as THREE.MeshBasicMaterial;
        material.color.setHex(e.matches ? 0xff00ff : 0xe57986);
      });
    };

    colorSchemeQuery.addEventListener("change", handleColorSchemeChange);

    return {
      scene,
      renderer,
      camera,
      cleanup: () => {
        colorSchemeQuery.removeEventListener("change", handleColorSchemeChange);
      },
    };
  }, [isMounted]);

  const animate = useCallback((camera: THREE.PerspectiveCamera) => {
    if (!sphereRef.current) return;

    sphereRef.current.rotation.x += 0.005;
    sphereRef.current.rotation.y += 0.005;

    floatingElementsRef.current.forEach((element, index) => {
      element.rotation.x += 0.01 * (index + 1);
      element.rotation.y += 0.005 * (index + 1);
      element.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
    });

    if (rendererRef.current && sceneRef.current) {
      rendererRef.current.render(sceneRef.current, camera);
    }

    animationRef.current = requestAnimationFrame(() => animate(camera));
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!sphereRef.current) return;

    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    sphereRef.current.rotation.x = mouseY * 0.3;
    sphereRef.current.rotation.y = mouseX * 0.3;
  }, []);

  const handleResize = useCallback(() => {
    if (!rendererRef.current || !sceneRef.current) return;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const { camera, cleanup } = initThreeScene() || {};

    if (camera) {
      animate(camera);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      cleanup?.();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      if (sphereRef.current) {
        const geometry = sphereRef.current.geometry;
        const material = sphereRef.current.material as THREE.Material;
        geometry.dispose();
        material.dispose();
      }

      floatingElementsRef.current.forEach((element) => {
        const geometry = element.geometry;
        // const material = element.material;
        geometry.dispose();
        // material.dispose();
      });
    };
  }, [initThreeScene, animate, handleMouseMove, handleResize, isMounted]);

  // Only render canvas on client side
  if (!isMounted) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
        filter: "blur(8px)",
      }}
    />
  );
};

export default ThreeBackground;
