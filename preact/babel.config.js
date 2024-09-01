module.exports = {
  presets: [
    ["@babel/preset-env", { 
      targets: { node: "current" },
      modules: "auto"
    }],
    ["@babel/preset-react", { 
      pragma: "h", 
      pragmaFrag: "Fragment",
      runtime: "classic"
    }],
    "@babel/preset-typescript"
  ],
  plugins: [
    ["@babel/plugin-transform-react-jsx", { 
      pragma: "h", 
      pragmaFrag: "Fragment" 
    }],
    "@babel/plugin-transform-modules-commonjs"
  ]
};