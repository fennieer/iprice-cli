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

### Commands:
```terminal
  iprice-pfer uppercase|up <string>   Change string to uppercase
  iprice-pfer alternate|alt <string>  Converts string to alternate upper and lower case
  iprice-pfer create-csv|c <string>   Create CSV file from string
```

!!NOTE: If you have a space in the input value, please single/double quote the input value.
```terminal
iprice-pfer uppercase "Hello World"
```