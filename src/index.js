const fs = require('fs');

//Change string to uppercase 
const uppercase = (str) => {
    //let isString = /^[A-Za-z]+$/.test(str);
    let uppercase = str.toUpperCase();
    console.log(uppercase);
}

//Converts string to alternate upper and lower case
const alternate = (str) => {

  if(typeof str === "string"){
    let strAlt = str.split('');
    let joinStr;
    for (let i = 0; i < strAlt.length; i++) {
        if(i % 2 == 1 ){
            strAlt[i] = strAlt[i].toUpperCase();

        } else {
            strAlt[i] = strAlt[i].toLowerCase();
        }
            joinStr = strAlt.join('');
    }
    console.log(joinStr);
  } else {
      console.log('Please submit a string input. E.g: "Hello World"');
  }
}

//Creates a CSV file from the input
const createCSV = (str) => {
    let splitStr = str.split('');
    let formatCSV;
    for (let i = 0; i < splitStr.length; i++) {
        formatCSV = splitStr.join(',');
    }
    //console.log(formatCSV);

    fs.writeFile('myFile.csv', formatCSV, 'utf8', function (err) {
    if (err) {
        console.log('Some error occured - file either not saved or corrupted file saved.');
    } else{
        console.log('CSV created!');
    }
    });
}

//Export All Methods
module.exports = {
      uppercase,
      alternate,
      createCSV
}
