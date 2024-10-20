"use client"
import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial,} from "@react-three/drei";
// @ts-expect-error
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from 'three'; // Import THREE for TypeScript types

// Define your props type
interface StarBackgroundProps {
    // Add any specific props you expect here
}

const StarBackground = (props: StarBackgroundProps) => {
    // Define the ref type as THREE.Points
    const ref = useRef<THREE.Points>(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff" // Fixed color syntax
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false} // Fixed typo from dethWrite to depthWrite
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => (
    <div className="w-full h-auto fixed inset-0 z-[20]">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
                <StarBackground />
            </Suspense>
        </Canvas>
    </div>
);

export default StarsCanvas;
