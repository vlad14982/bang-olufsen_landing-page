'use strict';

const purgecss = require('@fullhuman/postcss-purgecss').default;

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.html', './src/**/*.js'],
      safelist: [/^form__/, /^wow/, /^animate__/, /^animated-path/],
    }),
  ],
};
