module.exports = {
  "presets": [
    [
      "@babel/env",
      {
        "loose": true,
        "modules": false
      }
    ],
    "@babel/react"
  ],
  "include": "**/*.js",
  "exclude": "**/*.ts",
  "plugins": [
    "babel-plugin-transform-async-to-promises"
  ]
}