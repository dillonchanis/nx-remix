const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  content: [
    join(__dirname, './app/**/*.{ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
