// from 11ty.dev/docs/
module.exports = function(eleventyConfig) {
    // Return your Object options:
    
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    return {
      dir: {
        input: "src",
      }
    };
  }

