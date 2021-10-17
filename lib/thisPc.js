/**
 * @fileoverview main application file.
 * @author Priyanshu raj
 */

"use strict";

const { program } = require("commander");
const specs = require("./core/specs");
const packageJson = require("../package.json");
const systemInfo = require("./core/systemInfo");
const userInfo = require("./core/userInfo");
const cupUsages = require("./periodic/cupUsages");
const getMemory = require("./periodic/memory");
const chalk = require("chalk");

program.version(packageJson.version);

/**
 * All available commands for app.
 */
program
  .option("-cu, --cpu-usages", "Show cpu uses of the system.")
  .option("-s,  --specs", "Shows system specification.")
  .option("-ui, --user-info", "Shows user information.")
  .option("-m, --memory", "Show total and free memory.")
  .option("-w, --watch", "Show total and free memory.")
  .option("-si, --system-info", "Shows system information");

program.parse(process.argv);

const options = program.opts();

console.info(
  chalk.bgGreen(
    chalk.black(
      "Terminal size: " + process.stdout.columns + "x" + process.stdout.rows
    )
  )
);

console.log();

switch (true) {
  case options.memory && options.watch:
    watch(getMemory);
    break;
  case options.cpuUsages && options.watch:
    watch(cupUsages);
    break;
  case options.cpuUsages:
    cupUsages();
    break;
  case options.specs:
    specs();
    break;
  case options.memory:
    getMemory();
    break;
  case options.userInfo:
    userInfo();
    break;
  case options.systemInfo:
    systemInfo();
    break;
  default:
    userInfo();
    specs();
    systemInfo();
    break;
}

function watch(cb) {
  setInterval(() => {
    console.clear();
    cb();
  }, 1000);
}
