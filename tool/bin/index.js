#!/usr/bin/env node

const chalk = require("chalk");
const arg = require("arg");
const getConfig = require("../src/config/config-mgr");
const start = require("../src/commands/start");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
    "-s": "--start",
    "-b": "--build",
  });

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (error) {
  console.error(chalk.yellow(error.message));
  console.log();
  usage();
}

function usage() {
  console.log(`
        tool [CMD]
        --start\Starts the tool
        --build\builds it`);
}
