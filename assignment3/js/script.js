// Declare constants for elements
const studentInfo = document.getElementById("student-info");
const showStudentInfoBtn = document.getElementById("show-student-info");
const pizzaOrderForm = document.getElementById("pizza-order-form");
const orderSummary = document.getElementById("order-summary");
const nameInput = document.getElementById("name");
const sizeInput = document.getElementById("size");
const instructionsInput = document.getElementById("instructions");

// Add event listener to show student info on button click
showStudentInfoBtn.addEventListener("click", function () {
    studentInfo.innerHTML = "<p>Student ID: 1272937, Name: Owen Moreau</p>";
});

// Add event listener to the pizza order form
pizzaOrderForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to avoid page refresh

    // Capture form inputs
    let name = nameInput.value; 
    let size = sizeInput.value; 
    let instructions = instructionsInput.value;

    // Get all checked toppings
    const toppingElements = document.querySelectorAll("input[name='toppings']:checked");
    let toppings = []; // Stores topping values

    // Loop through each checked topping and add its value to the array
    toppingElements.forEach((topping) => {
        toppings.push(topping.value);
    });

    // Define a Pizza class to store order details
    class Pizza {
        constructor(name, size, toppings, instructions) {
            this.name = name;
            this.size = size;
            this.toppings = toppings.length > 0 ? toppings : ["None"];
            this.instructions = instructions;
        }

        // Generate a description of the pizza order
        getDescription() {
            return `Order for: ${this.name}<br>` +
                   `Size: ${this.size}<br>` +
                   `Toppings: ${this.toppings.join(", ")}<br>` +
                   `Special Instructions: ${this.instructions || "None"}`;
        }
    }

    // Create a new Pizza object using form input values
    const pizzaOrder = new Pizza(name, size, toppings, instructions);

    // Display the order summary on the page
    orderSummary.innerHTML = pizzaOrder.getDescription();
});
