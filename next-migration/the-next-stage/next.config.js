const path = require("path");
const ThreeMinifierResolver = require("@yushijinhun/three-minifier-webpack");

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new ThreeMinifierResolver({}));

    config.resolve.alias["three/src/Three.js"] = path.resolve(
      "three/build/three.module.js"
    );
    config.resolve.alias["three$"] = path.resolve("./utils/three.js");

    return config;
  },
};
