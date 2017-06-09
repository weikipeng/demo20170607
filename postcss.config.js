module.exports = {
  plugins: [
    'cssnext': {
      browsers: ['last 2 versions', 'IE > 10'],
    },
  ]
}
// postcss: () => [
//   postcssFocus(),
//   cssnext({
//     browsers: ['last 2 versions', 'IE > 10'],
//   }),
//   postcssReporter({
//     clearMessages: true,
//   }),
// ],
