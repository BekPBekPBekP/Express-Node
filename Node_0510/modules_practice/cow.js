"use.strict"

const cows = require('cowsay');


function cowSayz(text) {
    return cows.say({
    text: text || "I love choc!",
    e : "oO",
    r : true,
});
}
console.log(cowSayz());

module.exports = cowSayz;



