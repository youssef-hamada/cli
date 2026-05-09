#!/usr/bin/env node

try {
  const arg = require("arg");

  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
    "-s": "--start",
    "-b": "--build",
  });

  console.log(args);
} catch (error) {
  if (error.code === "MODULE_NOT_FOUND") {
    console.error(
      'Error: Missing dependency "arg". Please run: npm install arg',
    );
    process.exit(1);
  }
  throw error;
}
