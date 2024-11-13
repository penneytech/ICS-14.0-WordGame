// Define an object to hold the global state variables
// The are all the important variables for your app.
const globals = {
    answer: ["A", "", "", "", "",],
    answercounter: 0,
};

// Define a function to set a global variable
export function setGlobal(name, value) {
    console.log(`Setting global variable '${name}' to '${value}'`);
    globals[name] = value;
}

// Define a function to get a global variable
export function getGlobal(name) {
    console.log(`Getting global variable '${name}': '${globals[name]}'`);
    return globals[name];
}
