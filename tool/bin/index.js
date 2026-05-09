#!/usr/bin/env node

try {
  const arg = require("arg");

  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
    "-s": "--start",
    "-b": "--build",
  });

  if (args["--start"]) {
    console.log("Starting the development server...");
  }
} catch (error) {
  console.error("Error parsing arguments:", error.message);

  usage();
}

function usage() {
  console.log(`
        tool [CMD]
        --start\Starts the tool
        --build\builds it`);
}
