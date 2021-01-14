module.exports = function reverse(n) {
    if (typeof n === 'number') {
        const stringRepresentation = Math.abs(n) + '';
        let reversedNumber = '';
        for (length = stringRepresentation.length, i = length - 1; i >= 0; i--) {
            reversedNumber += stringRepresentation[i];
        }
        return reversedNumber;
    }
    return false;
}