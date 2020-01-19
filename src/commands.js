#!/usr/bin/env node

const program = require('commander');
const { uppercase, alternate, createCSV } = require('./index');

program
    .version('1.0.0')
    .description('A CLI tool to transform input data')

program
    .command('uppercase <string>')
    .alias('up')
    .description('Change string to uppercase')
    .action((str) => {
        uppercase(str);
    })

program
    .command('alternate <string>')
    .alias('alt')
    .description('Converts string to alternate upper and lower case')
    .action((str) => {
        alternate(str);
    })

program
    .command('create-csv <string>')
    .alias('c')
    .description('Create CSV file from string')
    .action((str) => {
        createCSV(str);
})

program.parse(process.argv);

