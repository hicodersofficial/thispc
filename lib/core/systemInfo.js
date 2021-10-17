"use strict";
const os = require("os");
const logger = require("../utils/logger");

const systemInfo = () => {
  logger.info("System Information");
  const info = {
    "Operating System": os.version(),
    Platform: os.platform(),
    Type: os.type(),
    Architecture: os.arch(),
    "Temp Directory": os.tmpdir(),
  };

  console.table(process.stdout.columns < 135 ? info : [info]);
};

module.exports = systemInfo;
