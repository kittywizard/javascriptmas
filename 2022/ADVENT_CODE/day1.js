const express = require('express');
const app = express();

const input = require('./input');
const fs = require('fs');

//console.log(input);
const split = input.split('\n').filter(item => item != '');
console.log(split);

//look for the returns, spaces, whatever character that is