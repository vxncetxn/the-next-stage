import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { interpolateRgb } from "d3-interpolate";

import getRandomInt from "../../helpers/getRandomInt";
import randomChoice from "../../helpers/randomChoice";

const Triangle = ({ ...others }) => {
  const triangleRef = useRef();

  const vertices = [
    [0, getRandomInt(1, 3), 0],
    [getRandomInt(-1, 1), 0, getRandomInt(2, 4)],
    [getRandomInt(2, 4), 0, getRandomInt(-1, 1)],
    [getRandomInt(-4, -2), 0, getRandomInt(-4, -2)],
  ];
  const faces = [
    [0, 1, 2],
    [2, 3, 0],
    [1, 0, 3],
    [3, 2, 1],
  ];

  const colorIp = interpolateRgb("#00F260", "#0575E6");
  const colors = [
    colorIp(0),
    colorIp(0.2),
    colorIp(0.4),
    colorIp(0.6),
    colorIp(0.8),
    colorIp(1),
  ];

  useEffect(() => {
    triangleRef.current.geometry.computeFaceNormals();
  }, []);

  return (
    <mesh
      ref={triangleRef}
      position={[getRandomInt(-6, 6), getRandomInt(-6, 6), getRandomInt(-6, 6)]}
      rotation={[
        getRandomInt(0, 628) / 100,
        getRandomInt(0, 628) / 100,
        getRandomInt(0, 628) / 100,
      ]}
      {...others}
    >
      <geometry
        attach="geometry"
        vertices={vertices.map((v) => new THREE.Vector3(...v))}
        faces={faces.map((f) => new THREE.Face3(...f))}
      ></geometry>
      <meshStandardMaterial attach="material" color={randomChoice(colors)} />
    </mesh>
  );
};

export default Triangle;
