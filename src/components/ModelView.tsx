"use client";
import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import IPhone from "./Iphone";
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  Suspense,
  useEffect,
  useState,
} from "react";
import { StaticImageData } from "next/image";

interface ModelViewProps {
  index: number;
  groupRef: MutableRefObject<THREE.Group | null>;
  gsapType: string;
  controlRef: MutableRefObject<any>;
  setRotationState: Dispatch<SetStateAction<number>>;
  setViewHasMounted: Dispatch<SetStateAction<boolean>>;
  size: any;
  item: { title: string; color: string[]; img: string | StaticImageData };
}

const ModelView: React.FC<ModelViewProps> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  setViewHasMounted,
  size,
  item,
}) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    setViewHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={index === 1 ? "small" : "large"}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
