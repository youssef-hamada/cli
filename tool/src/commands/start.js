const chalk = require("chalk");

module.exports = function start(config) {
  console.log(chalk.bgCyanBright("  Starting the app  "));
  console.log(
    chalk.gray("Received Configuration in the start function: "),
    config,
  );
};
