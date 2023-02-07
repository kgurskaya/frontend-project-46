#!/usr/bin/env node

import { program } from 'commander';
import genDiff from '../src/index.js';

program
    .version('0.0.1')
    .description(`Compares two configuration files and shows a difference.`)
    .option('-f, --format <type>',   'output format')
    .argument('<filepath1>', 'filepath1')
    .argument('<filepath2>', 'filepath2')
    .action((file1, file2) => genDiff(file1, file2));
program.parse();

// .arguments('<filepath1> <filepath2>')