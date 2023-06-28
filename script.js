import { adjectiveArray1 } from './word-arrays/adjective-array-1.js';
import { adjectiveArray2 } from './word-arrays/adjective-array-2.js';
import { wordArray } from './word-arrays/word-array.js';

const spacerArray = ['', '-', '_', '-', '_', '-', '_', '-', '_'];

const generateUsername = (event) => {
	event.preventDefault();
	const wordCount2 = document.getElementById('wordCount2').checked;
	console.log(wordCount3);
	if (wordCount2) {
		const newArray = adjectiveArray1.concat(adjectiveArray2);
		const firstWord = newArray[Math.floor(Math.random() * newArray.length)];
		const thirdWord =
			wordArray[Math.floor(Math.random() * wordArray.length)];
		const spacer =
			spacerArray[Math.floor(Math.random() * spacerArray.length)];
		const generatedWord = firstWord + spacer + thirdWord;
		document.getElementById('generatedWord').innerHTML = generatedWord;
	} else {
		const firstWord =
			adjectiveArray1[Math.floor(Math.random() * adjectiveArray1.length)];
		const secondWord =
			adjectiveArray2[Math.floor(Math.random() * adjectiveArray2.length)];
		const thirdWord =
			wordArray[Math.floor(Math.random() * wordArray.length)];
		const spacer1 =
			spacerArray[Math.floor(Math.random() * spacerArray.length)];
		const spacer2 =
			spacerArray[Math.floor(Math.random() * spacerArray.length)];
		const generatedWord =
			firstWord + spacer1 + secondWord + spacer2 + thirdWord;
		document.getElementById('generatedWord').innerHTML = generatedWord;
	}
};

document
	.getElementById('generateButton')
	.addEventListener('click', generateUsername);
