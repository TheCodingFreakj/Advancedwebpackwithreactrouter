//Webpack configuration only used by production mode.
//const { DefinePlugin } = require("webpack");
const Dotenv = require("dotenv-webpack");
module.exports = {
  mode: "production",
  devtool: "source-map",
  plugins: [
    // new DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production"),
    //   },
    // }),
    new Dotenv({
      path: "./.env.production",
    }),
  ],
};
