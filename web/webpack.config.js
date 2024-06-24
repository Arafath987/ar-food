module.exports = {
    // ... other configuration
    module: {
      rules: [
        {
          test: /\.gltf$/,
          use: ['@loaders.gl/gltf'],
        },
        // ... other rules
      ],
    },
  };