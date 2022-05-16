"use strict";

const gpuInfo = require("gpu-info");
const logger = require("../utils/logger");
const platform = require("os").platform();

/**
 * Show GPU information
 * @async
 */
async function gpuSpecs() {
  try {
    console.log(platform);
    const data = await gpuInfo();
    logger.info(`GPU Information (GPU Count ${data.length})`);
    for (let i = 0; i < data.length; i++) {
      const gpu = data[i];
      logger.info(i + 1);
      const info = {
        Status: gpu.Status,
        name: gpu.Name,
        "Max Refresh Rate": gpu.MaxRefreshRate,
        "Current Refresh Rate": gpu.CurrentRefreshRate,
        "GPU Size": (gpu.AdapterRAM / 1024 ** 3).toFixed(2) + " GB",
        "Video Processor": gpu.VideoProcessor,
        "Driver Version": gpu.DriverVersion,
        "Current Resolution": `${gpu.CurrentHorizontalResolution}x${gpu.CurrentVerticalResolution}`,
      };
      console.table(info);
    }
  } catch (error) {
    logger.info(`GPU Information`);
    logger.error(error.message);
  }
}

module.exports = gpuSpecs;
