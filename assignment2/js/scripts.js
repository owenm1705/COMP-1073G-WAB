// Constants for query selectors
const colorInput = document.getElementById("customNumber");
const studentIdInput = document.getElementById("studentIdInput");
const studentIdDisplay = document.getElementById("myStudentId");
const imageSelect = document.getElementById("imageSelect");
const imageElement = document.getElementById("images");

// function to change bg color from user input and add student id
function changeCustomColor() {

    const color = colorInput.value;
  
    const value = parseInt(colorInput.value);
    let chosenColor = "";

    // if cases to set the color depending on the user defined value
    if (value < 0 || value > 100) {
        chosenColor = "red";
    } else if (value >= 0 && value < 20) {
        chosenColor = "green";
    } else if (value >= 20 && value < 40) {
        chosenColor = "blue";
    } else if (value >= 40 && value < 60) {
        chosenColor = "orange";
    } else if (value >= 60 && value < 80) {
        chosenColor = "purple";
    } else if (value >= 80 && value <= 100) {
        chosenColor = "yellow";
    }

    document.body.style.backgroundColor = chosenColor;
    
    studentId = studentIdInput.value;
    studentIdDisplay.textContent = 'Your Student Id is ${studentId}';

}

// function to apply the random color and set it to the background color
function changeRandomColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

// function to change bg color from random no.
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


// Function to generate options for the select list
function addList() {

    // Check if the select list already has options.
    if (imageSelect.options.length > 1) {
      return;
    }

    // Array of option values (or display text)
    const optionsArray = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

    // Loop over the array and create an option element for each item
    for (let i = 0; i < optionsArray.length; i++) {
      const option = document.createElement("option");
      // Set the value and display text of the option
      option.value = optionsArray[i];
      option.text = optionsArray[i];
      // Append the option to the select list
      imageSelect.appendChild(option);
    }
  }

// function to change image
function changeImage() {
    const selectedOption = imageSelect.value;
  
    // Map the option to an image path.
    let imagePath = "";
  
    // switch case to connect the images to the options array
    switch (selectedOption) {
      case "Image 1":
        imagePath = "img/img1.jpg";
        break;
      case "Image 2":
        imagePath = "img/img2.jpg";
        break;
      case "Image 3":
        imagePath = "img/img3.jpg";
        break;
      case "Image 4":
        imagePath = "img/img4.jpg";
        break;
      case "Image 5":
        imagePath = "img/img5.jpg";
        break;
      default:
        imagePath = ""; 
    }
  
    // If a valid image path was found, update the image element's src attribute
    if (imagePath) {
      imageElement.src = imagePath;
      imageElement.style.display = "block";  
    } else {
      // Hide the image element if no valid option is selected
      imageElement.src = "";
      imageElement.style.display = "none";
    }
  }
  
// event listeners for on change event of select
  imageSelect.addEventListener("change", changeImage);

// event listeners for on click event of buttons and select
document.querySelector(".custColor").addEventListener("click", changeCustomColor);
document.querySelector(".randColor").addEventListener("click", changeRandomColor);