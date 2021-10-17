/**
 * @fileoverview Custom colored loggers
 * @author Priyanshu raj
 */

"use strict";

const chalk = require("chalk");

const logger = {
  success: (...args) => console.log(chalk.green(args.join(" "))),
  info: (...args) =>
    console.log(chalk.bgBlue(chalk.black(" " + args.join(" ") + " "))),
  error: (...args) => console.log(chalk.red(args.join(" "))),
  log: (arg, color = null) => console.log(color ? chalk[color](arg) : arg),
};

module.exports = logger;
