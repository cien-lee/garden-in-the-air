const path = require("path");

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],

  webpackFinal: async (config) => {
    const nextConfig = require('../next.config');

    config.resolve.alias['@components'] = path.resolve(__dirname, '../src/components');
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles');

    config.optimization.sideEffects = false;
    config.resolve.extensions.push(".ts", ".tsx");

    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      include: /src/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: [
              require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-typescript'),
              require.resolve('linaria/babel'),
            ],
          },
        },
        {
          loader: 'linaria/loader',
          options: {
            cacheDirectory: '../.linaria-cache',
            babelOptions: {
              presets: [
                require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-typescript'),
                require.resolve('linaria/babel'),
              ],
            },
          },
        },
        require.resolve('react-docgen-typescript-loader'),
      ],
    });

    return { ...nextConfig.webpack, ...config };
  },
}
