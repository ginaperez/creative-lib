module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    // "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "@storybook/preset-create-react-app",
    "@storybook/addon-mdx-gfm",
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true },
    },
  ],
  "framework": {
    name: "@storybook/react-webpack5",
    options: {}
  },
  "core": {
    "disableTelemetry": true
  },
  docs: {
    // autodocs: true
  }
};