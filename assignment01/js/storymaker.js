// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Constants for main button query selectors
const noun1Button = document.getElementById("noun1");
const verbButton = document.getElementById("verb");
const adjectiveButton = document.getElementById("adjective");
const noun2Button = document.getElementById("noun2");
const settingButton = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Constants for final buttons and p tags
const playbackButton = document.getElementById("playback");
const randomButton = document.getElementById("random");
const storyParagraph = document.getElementById("story");
const studentIdParagraph = document.getElementById("studentId");

// Variables for pre-defined arrays
const nouns1 = ["dog", "cat", "teacher", "student", "bird"];
const verbs = ["runs", "jumps", "barks", "teaches", "flies"];
const adjectives = ["big", "fast", "quiet", "funny", "cute"];
const nouns2 = ["car", "ball", "computer", "book", "plane"];
const settings = ["park", "classroom", "school", "forest", "beach"];

// Variables for count to grab array elements (you can use `Math.random()` directly, but these variables can help with debugging or further functionality)
let noun1Index = 0;
let verbIndex = 0;
let adjectiveIndex = 0;
let noun2Index = 0;
let settingIndex = 0;

/* Functions
-------------------------------------------------- */
// For each function it selects a random item from the arrays and updates the text content of the element with the respected ID then displays it in a textbox
function noun1_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    document.getElementById("choosenNoun1").textContent = randomNoun1;
}

function verb_on_click() {
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    document.getElementById("choosenVerb").textContent = randomVerb;
}

function adjective_on_click() {
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    document.getElementById("choosenAdjective").textContent = randomAdjective;
}

function noun2_on_click() {
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    document.getElementById("choosenNoun2").textContent = randomNoun2;
}

function setting_on_click() {
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    document.getElementById("choosenSetting").textContent = randomSetting;
}

// Concatenate the user story and display
function playback_on_click() {
    const noun1 = document.getElementById("choosenNoun1").textContent;
    const verb = document.getElementById("choosenVerb").textContent;
    const adjective = document.getElementById("choosenAdjective").textContent;
    const noun2 = document.getElementById("choosenNoun2").textContent;
    const setting = document.getElementById("choosenSetting").textContent;

    const story = `The ${adjective} ${noun1} ${verb} the ${noun2} in the ${setting}.`;
    document.getElementById("story").textContent = story;
}

// Grabbing random element from arrays, concatenate and display
// Selects random item from their respective arrays and stores them in variables same as above only all at once.
function random_on_click() {
    const randomNoun1 = nouns1[Math.floor(Math.random() * nouns1.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun2 = nouns2[Math.floor(Math.random() * nouns2.length)];
    const randomSetting = settings[Math.floor(Math.random() * settings.length)];
    // Displays items selected above into a textbox
    const story = `The ${randomAdjective} ${randomNoun1} ${randomVerb} the ${randomNoun2} in the ${randomSetting}.`;
    document.getElementById("story").textContent = story;
}

// Dynamically add student info
function setStudentInfo() {
    const studentId = "Your Name or ID Here";  
    document.getElementById("studentId").textContent = "Student: " + studentId;
}

/* Event Listeners
-------------------------------------------------- */
window.onload = setStudentInfo;

document.getElementById("noun1").addEventListener("click", noun1_on_click);
document.getElementById("verb").addEventListener("click", verb_on_click);
document.getElementById("adjective").addEventListener("click", adjective_on_click);
document.getElementById("noun2").addEventListener("click", noun2_on_click);
document.getElementById("setting").addEventListener("click", setting_on_click);
document.getElementById("playback").addEventListener("click", playback_on_click);
document.getElementById("random").addEventListener("click", random_on_click);