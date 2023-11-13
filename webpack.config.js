const path = require("path");

module.exports = {
module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader'}
        },
        { 
          test: /\.css?$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
          ]
        },
        {
          test: /\.scss$/,
          include: path.resolve(__dirname, 'assets/scss'),
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
      ]
    }
  }