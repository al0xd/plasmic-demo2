
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['vR8286yWtQfXuGhradZ47'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  