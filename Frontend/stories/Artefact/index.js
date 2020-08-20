import { useRef, forwardRef } from "react";
import OrbitControls from "orbit-controls-es6";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";
import PropTypes from "prop-types";

import Triangle from "./Triangle";

extend({ OrbitControls });

const Controls = ({ interactive }) => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      enabled={interactive}
      enableZoom={false}
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};

/**
 * 3D artefact meant to be the donors' mementos
 */
const ArtefactComp = forwardRef(({ form, interactive, ...others }) => {
  const trianglesArr = JSON.parse(form);

  return (
    <Canvas
      pixelRatio={2}
      camera={{ position: [0, 0, 20] }}
      // onCreated={({ gl }) => {
      //   gl.setPixelRatio(window.devicePixelRatio);
      // }}
      {...others}
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      <Controls interactive={interactive} />
      <group>
        {trianglesArr.map((triangleForm, idx) => (
          <Triangle key={idx} triangleForm={JSON.stringify(triangleForm)} />
        ))}
      </group>
    </Canvas>
  );
});

ArtefactComp.propTypes = {
  /**
   * Stringified form of array for which each child is an object encapsulating properties of base Triangle (such as vertices, position, etc.)
   */
  form: PropTypes.string.isRequired,
  /**
   * Used to determine if artefact is interactive (can accept mouse interactions from user)
   */
  interactive: PropTypes.bool,
};

ArtefactComp.defaultProps = {
  interactive: true,
};

export default ArtefactComp;
