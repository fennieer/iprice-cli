# iprice-pfer CLI tool

A CLI tool that accepts a string and does the following to it:
- converts the string to uppercase and outputs it to stdout.
- converts the string to alternate upper and lower case and outputs it to stdout.
- creates a CSV file from the string by making each character a column in the CSV and then output &quot; CSV created!&quot; to stdout.

## Installation

Use the package manager [here](https://www.npmjs.com/package/iprice-pfer) to install iprice-pfer.

```bash
npm i iprice-pfer
```

### Commands:
```terminal
  uppercase|up <string>   Change string to uppercase
  alternate|alt <string>  Converts string to alternate upper and lower case
  create-csv|c <string>   Create CSV file from string
```