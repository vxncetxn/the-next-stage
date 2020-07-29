import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";

import Triangle from "./Triangle";

import range from "../../helpers/range";

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

const Artefact = () => {
  return (
    <div style={{ width: "100%", height: 600, border: "1px solid red" }}>
      <Canvas
        camera={{ position: [0, 0, 20] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <Controls />
        <group>
          {range(20, 0).map((n) => (
            <Triangle key={n} />
          ))}
        </group>
      </Canvas>
    </div>
  );
};

export default Artefact;
