const hamburger = {
    bun: "sesame seed bun",
    patties: 2,
    pattyType: "beef",
    cheese: "cheddar",
    veggies: ["lettuce", "tomato", "onion"],
    sauces: ["ketchup", "mustard"],
    extras: [],

    describe: function () {
        return `This hamburger has a ${this.bun} with ${this.patties} ${this.pattyType} patties, ${this.cheese} cheese, ${this.veggies.join(", ")}, and is topped with ${this.sauces.join(", ")}${this.extras.length ? ", along with " + this.extras.join(", ") : ""}.`;
    }
};

document.getElementById("burger-description").textContent = hamburger.describe();

console.log(hamburger.describe());