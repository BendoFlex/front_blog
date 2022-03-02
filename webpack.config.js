const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

//output create the final bundle in dist
//plugin we use html plugin, inject script in this html
//modules tell webpack to use babel-loader to compile file ending by js


module.exports = {
    mode : "development",
    entry : path.join(__dirname , "src","index.js"),
    output : {
        path : path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },

        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join(__dirname,"src","index.html")
        }),
    ]
}