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
    "System Uptime": humanizeTime(os.uptime()),
  };

  console.table(process.stdout.columns < 135 ? info : [info]);
};

function humanizeTime(sec) {
  return sec / 60 / 60 > 24
    ? (sec / 60 / 60 / 24).toFixed(1) + " d"
    : (sec / 60 / 60).toFixed(1) + " h";
}

module.exports = specs;
