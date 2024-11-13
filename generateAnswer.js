import { getGlobal } from './globals.js';

export function generateAnswer() {
    // Get the current answer array
    let answer = getGlobal('answer');

    // Target and clear the answer div on the HTML side
    const answerdiv = document.getElementById("answer");
    answerdiv.innerHTML = "";

    // Generate a DIV for each letter in the "answer" array
    // and write it to the HTML 'answer' div
    answer.forEach((letter, index) => {
        const div = document.createElement("div");
        div.className = "resultletters";
        div.id = "a" + index;
        div.innerHTML = letter;
        answerdiv.appendChild(div);
    });
}
