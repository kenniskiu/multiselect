module.exports = {
  stories: ['../src/**/*.stories.js', '../src/**/*.stories.tsx'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      legacyRootApi: true,
    },
  },
  addons: ["@storybook/addon-essentials"]
};