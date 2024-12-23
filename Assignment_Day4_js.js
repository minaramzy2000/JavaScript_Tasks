// Function that accepts only 2 parameters and throws exception otherwise
function acceptTwoParameters(param1, param2) {
    if (arguments.length !== 2) {
        throw new Error("This function requires exactly 2 parameters.");
    }

    console.log("Parameters accepted:", param1, param2);
}
function addNumericalValues(...args) {
    /**
     * Adds multiple numerical values.
     *
     * @param {...any} args - A variable number of arguments to be summed up.
     * @returns {number} The sum of all numerical arguments.
     * @throws {Error} If any of the arguments is not a numerical value.
     */
    // Validate that all arguments are numerical values (number type)
    for (const arg of args) {
        if (typeof arg !== 'number') {
            throw new Error(`All arguments must be numerical. Invalid argument: ${arg}`);
        }
    }

    // Sum up the numerical values
    return args.reduce((sum, num) => sum + num, 0);
}


function reverseParameters(...args) {
    /**
     * Reverses the order of the provided arguments.
     *
     * @param {...any} args - A variable number of arguments to be reversed.
     * @returns {Array} An array of arguments in reversed order.
     */
    return args.reverse();
}

function isPrime(num) {
    /**
     * Checks if a number is prime.
     *
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is prime, false otherwise.
     */
    if (typeof num !== 'number' || num <= 1 || !Number.isInteger(num)) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
