function capitalize(str) {
    try {
        if (typeof str !== "string") {
            throw new TypeError("Please input a string")
        } else {
            return str.charAt(0).toUpperCase() + str.slice(1); 
        }
    }
    catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
}

function reverse(str) {
    try {
        if (typeof str !== "string") {
            throw new TypeError("Please input a string")
        }
        if (str.length <= 1) {
            return str;
        } else {
            return str[str.length - 1] + reverse(str.slice(0, -1));
        }
    }
    catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
}

function contains(str, substr) {
    try {
        if (typeof str !== "string") {
            throw new TypeError("Please input a string")
        } else {
        return str.includes(substr);
        }
    }
    catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
}

module.exports = {capitalize, reverse, contains};