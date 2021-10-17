"use strict";

const os = require("os");

const getMemory = () => {
  const info = {
    "Total Memory": (os.totalmem() / 1024 ** 3).toFixed(2) + " GB",
    "Free Memory": (os.freemem() / 1024 ** 3).toFixed(2) + " GB",
  };
  console.table(process.stdout.columns < 50 ? info : [info]);
};

module.exports = getMemory;
