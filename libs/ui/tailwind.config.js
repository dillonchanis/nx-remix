const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  presets: [require('../../tailwind-workspace-preset')],
  content: [
    join(__dirname, './src/**/*.{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
