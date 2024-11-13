import { handleKeyPress } from './handleKeyPress.js';

const keys = ["Q", "U", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "BACKSPACE", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];

export function generateKeyboard() {
  // Target the key row DIV's on the frontend
  const keyfirstrow = document.getElementById("keyfirstrow");
  const keysecondrow = document.getElementById("keysecondrow");
  const keythirdrow = document.getElementById("keythirdrow");

  keys.forEach((key, index) => {
    // Create a
    const div = document.createElement("div");

    // ONCLICK action (Key pressed)
    div.onclick = function presskey() {
      handleKeyPress(key);
    };

    // Logic for assigning keys to divs
    if (index >= 0 && index < 10) {
      div.className = "firstrowkeys";
      div.id = key;
      div.innerHTML = key;
      keyfirstrow.appendChild(div);
    }
    if (index >= 10 && index < 19) {
      div.className = "secondrowkeys";
      div.id = key;
      div.innerHTML = key;
      keysecondrow.appendChild(div);
    }
    if (index >= 19 && index < 30) {
      div.className = "thirdrowkeys";
      div.id = key;
      div.innerHTML = key;
      keythirdrow.appendChild(div);
    }
  });
}
