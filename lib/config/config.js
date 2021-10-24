"use strict";
const packageJson = require("../../package.json");

const CONFIG = {
  VERSION: packageJson.version,
  APP_NAME: "This PC",
  PACKAGE_NAME: "thispc",
};

module.exports = CONFIG;
