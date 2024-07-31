"use strict";

const str = "test";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let text = "Big data";

console.log(text.indexOf("data"))

const logg = "Hello world";

console.log(logg.slice(6,11))
console.log(logg.slice(-5))

console.log(logg.substring(6, 11)); //от минуса смысла тут нет
console.log(logg.substr(6, 5)) //с какой буквы и сколько символов