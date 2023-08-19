import { adjectiveArray1 } from './word-arrays/adjective-array-1.js';
import { adjectiveArray2 } from './word-arrays/adjective-array-2.js';
import { wordArray } from './word-arrays/word-array.js';

const spacerArray = ['-', '_', '-', '_', '-', '_', '-', '_'];

var generateUsernameButton = document.getElementById('generateButton');
var saveUsernameButton = document.getElementById('saveUsernameButton');
var savedUsernames = [];
var savedUsernamesDiv = document.getElementById('saved-usernames');

const generate2WordUsername = () => {
	const newArray = adjectiveArray1.concat(adjectiveArray2);
	const firstWord = newArray[Math.floor(Math.random() * newArray.length)];
	const thirdWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	const spacer = spacerArray[Math.floor(Math.random() * spacerArray.length)];

	return firstWord + spacer + thirdWord;
};

const generate3WordUsername = () => {
	const firstWord =
		adjectiveArray1[Math.floor(Math.random() * adjectiveArray1.length)];
	const secondWord =
		adjectiveArray2[Math.floor(Math.random() * adjectiveArray2.length)];
	const thirdWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	const spacer1 = spacerArray[Math.floor(Math.random() * spacerArray.length)];
	const spacer2 = spacerArray[Math.floor(Math.random() * spacerArray.length)];

	return firstWord + spacer1 + secondWord + spacer2 + thirdWord;
};

const generateUsername = (event) => {
	event.preventDefault();
	const wordCount2 = document.getElementById('wordCount2').checked;
	const generatedWord = document.getElementById('generatedWord');
	if (wordCount2) {
		generatedWord.innerHTML = generate2WordUsername();
		generatedWord.classList.add('generated-word-display');
	} else {
		generatedWord.innerHTML = generate3WordUsername();
		generatedWord.classList.add('generated-word-display');
	}
};

const saveUsername = (event) => {
	event.preventDefault();
	const usernameToBeSaved = generatedWord.innerHTML;
	const lastUsernameIndex = savedUsernames.length - 1;
	if (usernameToBeSaved === savedUsernames[lastUsernameIndex]) {
		return;
	} else {
		savedUsernames.push(generatedWord.innerHTML);
	}
	savedUsernamesDiv.innerHTML = savedUsernames;
};

savedUsernamesDiv.innerHTML = savedUsernames;

generateUsernameButton.addEventListener('click', generateUsername);
saveUsernameButton.addEventListener('click', saveUsername);
