// Display student ID and name
document.getElementById("student-info").textContent = "Student ID: 1272937, Name: Owen Moreau";

// Add event listener to the pizza order form
document.getElementById("pizza-order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to avoid page refresh

    // Capture form inputs
    let name = document.getElementById("name").value; 
    let size = document.getElementById("size").value; 

    // Get all toppings and select only the ones that are checked
    let toppingElements = document.querySelectorAll("input[name='toppings']:checked");

    let toppings = [];

    // Loop through each checked topping and add its value to the array
    toppingElements.forEach(function (topping) {
        toppings.push(topping.value);
    });

    let instructions = document.getElementById("instructions").value;

    // Define a Pizza class to store order details
    class Pizza {
        constructor(name, size, toppings, instructions) {
            this.name = name;
            this.size = size;
            this.toppings = toppings;
            this.instructions = instructions;
        }

        // Generate a description of the pizza order
        getDescription() {
            return `Order for: ${this.name}<br>` +
                   `Size: ${this.size}<br>` +
                   `Toppings: ${this.toppings.join(", ") || "None"}<br>` +
                   `Special Instructions: ${this.instructions || "None"}`;
        }
    }

    // Create a new Pizza object using form input values
    let pizzaOrder = new Pizza(name, size, toppings, instructions);

    // Display the order summary on the page
    document.getElementById("order-summary").innerHTML = pizzaOrder.getDescription();
});