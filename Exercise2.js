// Function to prompt the user for a number
function getNumberInput(promptMessage) {
    return parseFloat(prompt(promptMessage));
}

// Function to find the highest number in an array
function findHighestNumber(numbers) {
    let highestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }

    return highestNumber;
}

// Array to store the 10 numbers
const numbers = [];

// Prompt the user for 10 numbers
for (let i = 1; i <= 10; i++) {
    const number = getNumberInput(`Enter number ${i}:`);
    numbers.push(number);
}

// Find and display the highest number
const highestNumber = findHighestNumber(numbers);
console.log(`The highest number is: ${highestNumber}`);
