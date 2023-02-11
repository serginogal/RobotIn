const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@layouts': path.resolve(__dirname, '../src/layouts'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@views': path.resolve(__dirname, '../src/views'),
    }
    return config
  },
}
