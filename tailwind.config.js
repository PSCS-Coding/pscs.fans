module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/views/*.vue',
    './src/components/*.vue',
    './src/components/tiles/*.vue',
  ],
  theme: {
    extend: {
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
      },
      cursor: {
        grab: 'grab',
        copy: 'copy',
      },
    },
  },
  variants: {},
  plugins: [],
};
