import { useRef, useEffect, memo } from "react";
import { Vector3, Face3 } from "three";

const Triangle = memo(({ triangleForm, ...others }) => {
  const { vertices, color, position, rotation } = JSON.parse(triangleForm);
  const triangleRef = useRef();

  const faces = [
    [0, 1, 2],
    [2, 3, 0],
    [1, 0, 3],
    [3, 2, 1],
  ];

  useEffect(() => {
    triangleRef.current.geometry.computeFaceNormals();
  }, []);

  return (
    <mesh ref={triangleRef} position={position} rotation={rotation} {...others}>
      <geometry
        attach="geometry"
        vertices={vertices.map((v) => new Vector3(...v))}
        faces={faces.map((f) => new Face3(...f))}
      ></geometry>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
});

export default Triangle;
