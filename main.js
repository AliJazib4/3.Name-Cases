"use strict";
let personName = "Ali Jazib";
//lowercase
console.log("Lowercase:", personName.toLowerCase());
//Uppercase
console.log("Uppercase:", personName.toLocaleUpperCase());
//Titlecase
console.log("Titlecase:", personName.replace(/\aw/g, c => c.toUpperCase()));
