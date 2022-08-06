// module.exports = {
//   plugins: ["tailwindcss", "autoprefixer"],
// };

// module.exports = {
//   plugins: [require("tailwindcss"), require("autoprefixer")],
// };

module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
          "nesting-rules": true, // Enable nesting
        },
      },
    ],
    "tailwindcss",
    "postcss-nesting",
    "autoprefixer",
  ],
};
