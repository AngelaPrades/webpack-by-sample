module.exports = {
  entry: ['@babel/polyfill', 
          './students.js'
         ],
  output: {    
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
