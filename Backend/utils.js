const { interpolateRgb } = require("d3-interpolate");

function range(size, start = 0) {
  return [...Array(size).keys()].map((i) => i + start);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createArtefactForm(colorPoles) {
  let triangles = [];
  const colorIp = interpolateRgb(colorPoles[0], colorPoles[1]);
  const colors = [
    colorIp(0),
    colorIp(0.2),
    colorIp(0.4),
    colorIp(0.6),
    colorIp(0.8),
    colorIp(1),
  ];

  range(20, 0).forEach(() => {
    const vertices = [
      [0, getRandomInt(1, 3), 0],
      [getRandomInt(-1, 1), 0, getRandomInt(2, 4)],
      [getRandomInt(2, 4), 0, getRandomInt(-1, 1)],
      [getRandomInt(-4, -2), 0, getRandomInt(-4, -2)],
    ];
    const color = randomChoice(colors);
    const position = [
      getRandomInt(-7, 7),
      getRandomInt(-7, 7),
      getRandomInt(-7, 7),
    ];
    const rotation = [
      getRandomInt(0, 628) / 100,
      getRandomInt(0, 628) / 100,
      getRandomInt(0, 628) / 100,
    ];

    const triangle = { vertices, color, position, rotation };

    triangles.push(triangle);
  });

  return JSON.stringify(triangles);
}

module.exports = {
  range,
  getRandomInt,
  randomChoice,
  createArtefactForm,
};
