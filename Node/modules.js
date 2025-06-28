// const math  = require("./math"); // "type": "module", is script ko type kia bagar huum is ko use karta ha
import {add} from './math.js';      // "type": "module", jab ya script package.json ma likha ho tak ya use hota ha otherwise hum first line ko use karta ha

console.log("The value is", add(2,5));  //export in math.js file