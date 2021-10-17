"use strict";
const os = require("os");
const logger = require("../utils/logger");

const specs = () => {
  logger.info("System Specification");
  const info = {
    "Total Memory": (os.totalmem() / 1024 ** 3).toFixed(2) + " GB",
    "Total Cpus": os.cpus().length,
    "Cpu Model": os.cpus()[0].model.trimEnd(),
    "Cpu Speed": (os.cpus()[0].speed / 1000).toFixed(2) + " GHz",
  };

  console.table(process.stdout.columns < 135 ? info : [info]);
};

module.exports = specs;
