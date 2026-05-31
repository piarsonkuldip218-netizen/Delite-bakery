"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Preload } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * Floating "waterglass" 3D shapes used as the premium hero accent.
 *
 * Performance strategy (ships by default):
 *  - Canvas pauses rendering (frameloop "never") when scrolled off-screen
 *    via an IntersectionObserver.
 *  - DPR capped: 1.25 on mobile, 1.5 on desktop.
 *  - antialias disabled on mobile; transmission samples/resolution reduced.
 */

type GlassProps = {
  color: string;
  isMobile: boolean;
};

function Glass({ color, isMobile }: GlassProps) {
  return (
    <MeshTransmissionMaterial
      samples={isMobile ? 2 : 6}
      resolution={isMobile ? 128 : 256}
      thickness={0.9}
      roughness={0.06}
      transmission={1}
      ior={1.42}
      chromaticAberration={0.05}
      anisotropy={0.1}
      distortion={0.2}
      distortionScale={0.25}
      temporalDistortion={0.1}
      color={color}
      background={new THREE.Color("#FDF6EC")}
    />
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 6, 4]} intensity={2.2} />
      <directionalLight position={[-4, -2, 3]} intensity={1.1} color="#E36588" />
      <pointLight position={[3, 2, -4]} intensity={30} distance={25} decay={2} color="#E8A33D" />

      {/* Caramel icosahedron */}
      <Float speed={1.8} rotationIntensity={0.7} floatIntensity={1.6}>
        <mesh position={[-2.4, 1.2, 0]} scale={1.15}>
          <icosahedronGeometry args={[1, 0]} />
          <Glass color="#E8A33D" isMobile={isMobile} />
        </mesh>
      </Float>

      {/* Rose torus / ring */}
      <Float speed={2.4} rotationIntensity={1} floatIntensity={1.3}>
        <mesh position={[2.5, 1.6, -1]} rotation={[0.6, 0.2, 0]} scale={1}>
          <torusGeometry args={[0.75, 0.3, 24, 64]} />
          <Glass color="#E36588" isMobile={isMobile} />
        </mesh>
      </Float>

      {/* Honey sphere */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.8}>
        <mesh position={[2, -1.7, 0.5]} scale={0.95}>
          <sphereGeometry args={[0.85, 48, 48]} />
          <Glass color="#C77B30" isMobile={isMobile} />
        </mesh>
      </Float>

      {/* Dodecahedron */}
      <Float speed={1.5} rotationIntensity={0.9} floatIntensity={1.4}>
        <mesh position={[-2.3, -1.6, -0.5]} scale={0.85}>
          <dodecahedronGeometry args={[1, 0]} />
          <Glass color="#A7C272" isMobile={isMobile} />
        </mesh>
      </Float>

      {/* Center capsule accent */}
      <Float speed={2.6} rotationIntensity={0.6} floatIntensity={1.1}>
        <mesh position={[0, 0.1, -1.5]} rotation={[0.4, 0.3, 0.2]} scale={0.8}>
          <capsuleGeometry args={[0.4, 0.7, 8, 24]} />
          <Glass color="#F3A6BA" isMobile={isMobile} />
        </mesh>
      </Float>
    </>
  );
}

export default function FloatingGlass({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);

    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={isMobile ? [1, 1.25] : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 7], fov: 42 }}
      >
        <Suspense fallback={null}>
          <Scene isMobile={isMobile} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
