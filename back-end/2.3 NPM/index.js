// require sillyName package
// var generateSillyName = require("sillyname");
// var sillyname = generateSillyName();

// use the sillyName package
// console.log(`Hello, this is random generated sillyName: ${sillyname}.`);

// superheroes using ECMAScript

// import superheroes from "superheroes";

// const name = randomSuperhero();

// console.log(`This is random generated super name: ${name}.`);

import { randomSuperhero } from 'superheroes';

const randSuperhero = randomSuperhero();
console.log(`NAME: ${randSuperhero}`);