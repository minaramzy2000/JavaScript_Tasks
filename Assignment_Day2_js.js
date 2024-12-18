 // Input two numbers from the user
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));

    // Perform arithmetic operations
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mult = num1 * num2;
    const div = num2 !== 0 ? num1 / num2 : "Undefined (division by zero)";
    const mod = num2 !== 0 ? num1 % num2 : "Undefined (modulo by zero)";

    // Display results
    console.log(`Sum = ${sum}`);
    console.log(`Sub = ${sub}`);
    console.log(`Mult = ${mult}`);
    console.log(`Div = ${div}`);
    console.log(`Mod = ${mod}`);


const length = parseFloat(prompt("Enter the Length of the rectangle"));
const width = parseFloat(prompt("Enter the Width of the rectangle"));
console.log(`Area of rectangle = ${length * width}`)


const radius = parseFloat(prompt("Enter the Rasius of the circle"));
console.log(`The Diameter = ${radius*2} | The circumference = ${2* 3.14 * radius} | The Area = ${3.14 * radius * radius}`)
