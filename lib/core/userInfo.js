"use strict";
const os = require("os");
var moment = require("moment-timezone");
const logger = require("../utils/logger");

const userInfo = () => {
  logger.info("User Information");
  const info = {
    Username: os.userInfo().username,
    Hostname: os.hostname(),
    "Home Directory": os.userInfo().homedir,
    Timezone: moment.tz.guess(),
    Timestamp: moment().format(),
  };

  console.table(process.stdout.columns < 135 ? info : [info]);
};

module.exports = userInfo;
