import { setGlobal, getGlobal } from './globals.js';
import { generateAnswer } from './generateAnswer.js';

export function handleKeyPress(key) {

    // Get the answer array
    let answer = getGlobal('answer');
    // Get the answer counter
    let answercounter = getGlobal('answercounter');
    // Log keypress to the console
    console.log(key, "pressed!");
    // Set the answer array element to the keypress
    answer[answercounter] = key;
    // Increment the answer counter
    answercounter++;
    // Re-generate the answer
    generateAnswer();

    // Save the new answer array and current 
    // counter in 'globals.js'
    setGlobal('answer', answer);
    setGlobal('answercounter', answercounter);

}