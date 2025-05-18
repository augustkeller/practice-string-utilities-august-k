const stringUtilities = require('./stringUtils');

console.log(stringUtilities.capitalize("boJack Horseman"));
console.log(stringUtilities.reverse("Live evil!"));
console.log(stringUtilities.contains("Cat in the Hat", "cat"));

console.log(stringUtilities.capitalize(""));
console.log(stringUtilities.reverse(undefined));
console.log(stringUtilities.contains(undefined, null));

console.log(stringUtilities.capitalize("bLM"));
console.log(stringUtilities.reverse("¡Viva la revolución!"));
console.log(stringUtilities.contains("Be here now", "her"));
