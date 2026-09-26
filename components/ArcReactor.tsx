"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ChakraSphere() {
  const coreRef   = useRef<THREE.Mesh>(null);
  const ring1Ref  = useRef<THREE.Mesh>(null);
  const ring2Ref  = useRef<THREE.Mesh>(null);
  const ring3Ref  = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const px = mouse.x * 0.45;
    const py = mouse.y * 0.35;

    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.12;
      coreRef.current.rotation.x = t * 0.07;
      coreRef.current.position.x = THREE.MathUtils.lerp(coreRef.current.position.x, px, 0.05);
      coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, py, 0.05);
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.z = t * 0.25;
      ring1Ref.current.position.x = THREE.MathUtils.lerp(ring1Ref.current.position.x, px, 0.05);
      ring1Ref.current.position.y = THREE.MathUtils.lerp(ring1Ref.current.position.y, py, 0.05);
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.35;
      ring2Ref.current.rotation.x = t * 0.2;
      ring2Ref.current.position.x = THREE.MathUtils.lerp(ring2Ref.current.position.x, px, 0.045);
      ring2Ref.current.position.y = THREE.MathUtils.lerp(ring2Ref.current.position.y, py, 0.045);
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.15;
      ring3Ref.current.rotation.y = t * 0.08;
      ring3Ref.current.position.x = THREE.MathUtils.lerp(ring3Ref.current.position.x, px * 0.8, 0.04);
      ring3Ref.current.position.y = THREE.MathUtils.lerp(ring3Ref.current.position.y, py * 0.8, 0.04);
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 3]} intensity={4} color="#00FF66" />
      <pointLight position={[2, 2, 1]} intensity={2} color="#00E5FF" />
      <pointLight position={[-2, -1, 2]} intensity={1.5} color="#A855F7" />

      {/* Core — wireframe cyber sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[1.1, 28, 28]} />
        <meshStandardMaterial
          color="#00FF66"
          wireframe
          emissive="#00CC52"
          emissiveIntensity={0.6}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Inner distort glow */}
      <mesh position={[0, 0, 0]} scale={0.78}>
        <sphereGeometry args={[1.1, 16, 16]} />
        <MeshDistortMaterial
          color="#011A0A"
          emissive="#00CC52"
          emissiveIntensity={0.7}
          transparent
          opacity={0.5}
          distort={0.4}
          speed={2.5}
        />
      </mesh>

      {/* Orbital ring 1 — green */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.55, 0.013, 8, 100]} />
        <meshStandardMaterial color="#00FF66" emissive="#00FF66" emissiveIntensity={1.4} transparent opacity={0.75} />
      </mesh>

      {/* Orbital ring 2 — cyan */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.85, 0.009, 8, 100]} />
        <meshStandardMaterial color="#00E5FF" emissive="#00E5FF" emissiveIntensity={1.0} transparent opacity={0.6} />
      </mesh>

      {/* Outer slow ring — purple */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.15, 0.006, 4, 128]} />
        <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.8} transparent opacity={0.4} />
      </mesh>
    </>
  );
}

export default function ArcReactor() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ position: "absolute", inset: 0 }} gl={{ antialias: true, alpha: true }}>
      <ChakraSphere />
    </Canvas>
  );
}
