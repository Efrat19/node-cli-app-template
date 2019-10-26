#!/usr/bin/env node

var log4js = require('log4js');
var logger = log4js.getLogger('node-cli-app-template');
logger.level = 'debug';

function main() {
  logger.debug("Some debug messages");
  logger.error("Some error messages");
}

main();