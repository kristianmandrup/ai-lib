#!/usr/bin/env node

/*
 * ai-lib
 * https://github.com/kristianmandrup/ai-lib
 *
 * Copyright (c) 2016, Kristian Mandrup
 * Licensed under the MIT license.
 */

const program = require('commander');
 
program
  .version('0.0.1')

require('../lib/programs');

program.parse(process.argv);