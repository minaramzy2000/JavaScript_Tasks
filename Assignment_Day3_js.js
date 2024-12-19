// Task 1
var total = 0;
var continue_cal = true;
do {
    var input = parseFloat(prompt("Enter a new number:"));
    total+=input;
    console.log(`${total}`)
    if(input===0 || total > 100){
        continue_cal=false;
    }
} while (continue_cal);


// Task 2
    alert("Welcome to my site");

    // Prompt the user for their name
    let userName = prompt("Please enter your name:");

    // Prompt the user for their color choice
    let color = prompt("Choose a color: red, green, or blue").toLowerCase();

    // Validate the color choice
    if (!["red", "green", "blue"].includes(color)) {
        alert("Invalid color choice. Defaulting to black.");
        color = "black";
    }

    // Write the welcome message to the page
    document.body.innerHTML = `<h1 style="color: ${color};">Welcome, ${userName}!</h1>`;

//Task 3
let output="";
const msg = prompt("Enter your message : ")
for (let i = 1; i <= 6; i++) {
        output += `<h${i}>${msg}</h${i}>`;
    }
document.body.innerHTML+=`${output}`