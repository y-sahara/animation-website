import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef } from "react";

const Model = ({
  url,
  scale,
  position,
  rotation,
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
    const groupRef = useRef(null)
  const { scene } = useGLTF(url);

  useFrame((state) => {
if(groupRef.current){
    groupRef.current.position.y= Math.sin(state.clock.elapsedTime)*0.6
    groupRef.current.rotation.y= state.clock.elapsedTime * 0.3
}
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
};

const ThreeModel = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 1,
        delay: 0.5,
        stiffness: 130,
      }}
      className="w-full h-[700px]"
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* ロケットに色を付ける */}
        <ambientLight intensity={3} />
        <Model
          url="/src/assets/models/scene.gltf"
          scale={2}
          position={[4.8, 2.2, 1.4]}
          rotation={[Math.PI / 10, 0, Math.PI / 6]}
        />
        <OrbitControls/>
      </Canvas>
    </motion.div>
  );
};

export default ThreeModel;
