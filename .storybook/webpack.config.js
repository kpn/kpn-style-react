const path = require("path");
const includePath = path.resolve(__dirname, "..");

module.exports = {
  resolve: {
    alias: {
      "@kpn-style/react": path.resolve(__dirname, "../src")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: includePath,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        include: includePath,
        use: "url-loader"
      },
      {
        test: /\.stories\.(js|jsx|mdx)?$/,
        loaders: [
          {
            loader: require.resolve("@storybook/source-loader"),
            options: {
              uglyCommentsRegex: [/^eslint-.*/, /^global.*/]
            }
          }
        ],
        enforce: "pre"
      }
    ]
  }
};
