module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy('css')
  // // return {
  // //   passthroughFileCopy: true
  // // },
  return {
    dir: { input: 'src', output: '_site' }
  };
}