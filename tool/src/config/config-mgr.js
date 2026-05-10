const chalk = require("chalk");
const path = require("path");

module.exports = function getConfig() {
  const pkg = require(path.join(process.cwd(), "../test/package.json"));
  if (pkg.tool) {
    console.log(
      chalk.bgGreenBright(`Tool configuration: ${JSON.stringify(pkg.tool)}`),
    );

    return pkg.tool;
  } else {
    console.log(chalk.yellow("Could not find configuration"));

    return { port: 1234 };
  }
};
