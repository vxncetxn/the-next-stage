import React, { useRef } from "react";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import { OrbitControls } from "three";

import Triangle from "./Triangle";

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
      enableZoom={false}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

const Artefact = ({ form, ...others }) => {
  const trianglesArr = JSON.parse(form);

  return (
    <Canvas
      camera={{ position: [0, 0, 20] }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(window.devicePixelRatio);
      }}
      {...others}
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <Controls />
      <group>
        {trianglesArr.map((triangleForm, idx) => (
          <Triangle key={idx} triangleForm={JSON.stringify(triangleForm)} />
        ))}
      </group>
    </Canvas>
  );
};

export default Artefact;
