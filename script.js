/*
The script.js file ties together all your modules. If this was an orchestra, 
script.js is the conductor. Import your modules here to enable the functionality
of your application. 

*/

// Put your module imports here
import { generateKeyboard } from './generateKeyboard.js';
import { generateAnswer } from './generateAnswer.js';

// Initialize the website by generating the UI with javascript
generateAnswer();
generateKeyboard();
