'use strict';

const fs = require('fs');

const args = process.argv.slice(2);

fs.readFile(args[0], (err, data) => {
  if(err) {throw err;}
  console.log('Data before change: ',data.toString());
  fs.writeFile(args[0], random, (err) => {
    if(err) {throw err;}
    fs.readFile(args[0], (err, data) => {
      if(err) {throw err;}
      console.log('Data after the change: ', data.toString());
    });
  });
});

let random  = Math.floor(Math.random() * (100 - 1) + 1);

