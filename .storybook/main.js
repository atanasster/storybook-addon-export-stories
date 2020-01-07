module.exports = {
  presets: ['@storybook/addon-docs/preset'],
  stories: [
    './*.stories.(js|mdx)',
  ],
  addons: [
    './dist/register',
  ],
};
