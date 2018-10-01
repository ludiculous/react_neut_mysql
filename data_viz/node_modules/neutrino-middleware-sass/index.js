module.exports = ({ config }, options = {}) => {
  const sass = require.resolve('sass-loader');

  return config.module
    .rule('style')
    .test(/\.scss$/)
    .use('sass')
    .loader(sass)
    .when(options.sass, use => use.options(options.sass));
};
