module.exports = {
  use: [
    //'@neutrinojs/airbnb',
    
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'data_viz'
        }
      }
    ],
    ['@neutrinojs/style-loader', {
      // Override the default file extension of `.css` if needed
      test: /\.(css|sass|scss)$/,
      moduleTest: /\.module\.(css|sass|scss)$/,
      loaders: [
        // Define loaders as objects. Note: loaders must be specified in reverse order.
        // ie: for the loaders below the actual execution order would be:
        // input file -> sass-loader -> postcss-loader -> css-loader -> style-loader/mini-css-extract-plugin
        {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        },
        {
          loader: 'sass-loader',
          useId: 'sass',
          options: {
            includePaths: ['src/assets/styles', 'src/assets/styles']
          }
        }
      ]}
    ],
    '@neutrinojs/jest'
  ]
};
