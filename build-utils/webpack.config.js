const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs) ? addonsArgs : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(`./addons/webpack.${name}.js`));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig, ...getAddons(addon));
};

//Dynamically require the env specific web config file by passing the env variable from npm script
//merge it with the common config webpack file
