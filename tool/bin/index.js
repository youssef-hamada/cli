#!/usr/bin/env node

const chalk = require("chalk");
const arg = require("arg");
try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
    "-s": "--start",
    "-b": "--build",
  });

  if (args["--start"]) {
    console.log(chalk.bgCyanBright("Starting the tool..."));
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
