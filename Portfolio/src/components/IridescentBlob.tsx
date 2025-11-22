// src/components/IridescentBlob.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function BlobMesh() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.2}>
      <mesh>
        {/* radius, widthSegments, heightSegments */}
        <sphereGeometry args={[1.6, 128, 128]} />
        <MeshDistortMaterial
          distort={0.6} // kitna melt/organic lage
          speed={1.5}   // kitni fast distortion ho
          color="#ff9cf5"
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export const IridescentBlob = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        className="w-full h-full"
      >
        <color attach="background" args={["#02010a"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[4, 4, 2]} intensity={1.8} />

        <Suspense fallback={null}>
          <BlobMesh />
          {/* HDRI style reflections for chrome feel */}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};
