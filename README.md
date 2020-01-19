# iprice-pfer CLI tool

A CLI tool that accepts a string and does the following to it:
- converts the string to uppercase and outputs it to stdout.
- converts the string to alternate upper and lower case and outputs it to stdout.
- creates a CSV file from the string by making each character a column in the CSV and then output &quot; CSV created!&quot; to stdout.

## Clone repository

Clone [here](https://github.com/fennieer/iprice-cli.git) to get all files.

```bash
git clone https://github.com/fennieer/iprice-cli.git
```

## Installation

Please make sure your node is up-to-date. 
You will need to install [commander](https://github.com/tj/commander.js/#installation) for the CLI to work.

```bash
npm install commander
```

### Commands:

In file
```terminal
  node src/commands.js uppercase|up <string>   Change string to uppercase
  node src/commands.js alternative|alt<string>  Converts string to alternate upper and lower case
  node src/commands.js createCSV|c<string>   Create CSV file from string
```

Global
```terminal
  iprice-pfer up <string>   Change string to uppercase
  iprice-pfer alt <string>  Converts string to alternate upper and lower case
  iprice-pfer c <string>   Create CSV file from string
```

!!NOTE: If you have a space in the input value, please single/double quote the input value.
```terminal
iprice-pfer uppercase "Hello World"
```