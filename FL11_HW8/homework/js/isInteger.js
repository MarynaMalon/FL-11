function isInteger(b) {
    let result = (typeof b === 'number')&&(b % 1 === 0);
    return result;
}

isInteger(6);
isInteger(6.7);