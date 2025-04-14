/* Variables */
const searchButton = document.querySelector("#searchBtn");
const inputField = document.querySelector("#playerInput");
const statsDisplay = document.querySelector("#playerStats");
const studentInfoDisplay = document.querySelector("#studentInfo");

// Show student name and ID on the page
studentInfoDisplay.textContent = "Student Name: Owen Moreau | ID: 1272937";

// This function shows the Pokémon's info on the page
function displayPokemon(pokemon) {
    // Create an array of type names
    let typesArray = [];
    for (let i = 0; i < pokemon.types.length; i++) {
        typesArray.push(pokemon.types[i].type.name);
    }
    // Join the types with commas
    let types = typesArray.join(", ");

    // Create a string with each stat in a paragraph
    let stats = "";
    for (let i = 0; i < pokemon.stats.length; i++) {
        stats += `<p>${pokemon.stats[i].stat.name}: ${pokemon.stats[i].base_stat}</p>`;
    }

    // Put the full Pokémon info into the statsDisplay element
    statsDisplay.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Type:</strong> ${types}</p>
        ${stats}
    `;
}

// This function gets Pokémon data from the API
function fetchPokemonFromAPI() {
    // Get the user's input
    let userValue = inputField.value;

    // Check if the user entered something
    if (userValue === "") {
        alert("Please enter a Pokémon name!");
    } else {
        // Build the API URL
        let baseURL = "https://pokeapi.co/api/v2/pokemon/";
        let url = `${baseURL}${userValue.toLowerCase()}`;

        // Fetch the data
        fetch(url)
            .then(response => response.json()) // Convert to JSON
            .then(json => displayPokemon(json)) // Show the Pokémon
            .catch(err => {
                console.error(err); // Log the error
                alert("Pokémon not found. Please try again.");
            });
    }
}

// When the button is clicked, run the fetch function
searchButton.addEventListener("click", fetchPokemonFromAPI);
