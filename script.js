const adjectiveArray1 = [
	'the',
	'first',
	'only',
	'a',
	'one',
	'strange',
	'concluded',
	'upright',
	'all_Seeing',
	'arctic',
	'active',
	'i',
	'am',
	'1',
	'sparkling',
	'limitless',
	'cosmic',
    'doctor'
];
const adjectiveArray2 = [
	'lone',
	'last',
	'mossy',
	'fiery',
	'disco',
    'significant',
	'sparkly',
	'cat',
	'fox',
	'world',
	'aura',
	'beach',
	'fuzzy',
	'generic',
	'and_a',
	'fantastic',
	'dark',
	'cactus',
	'lost',
];
const wordArray = [
	'moon',
	'planet',
	'life',
	'fireball',
	'jupiter',
	'stick',
	'leaf',
	'mushroom',
	'bb',
	'alien',
	'hooman',
	'comet',
	'pokemon',
	'hamster',
	'wizard',
	'sphinx',
	'whale',
	'legend',
	'holiday',
	'dragonfly',
	'dancer',
];

const spacerArray = ['', '-', '_'];

const generateUsername = () => {
    if (wordNumber === 3) {

        const firstWord =
		adjectiveArray1[Math.floor(Math.random() * adjectiveArray1.length)];
        const secondWord =
		adjectiveArray2[Math.floor(Math.random() * adjectiveArray2.length)];
        const thirdWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        const spacer1 = spacerArray[Math.floor(Math.random() * spacerArray.length)];
        const spacer2 = spacerArray[Math.floor(Math.random() * spacerArray.length)];
        
        const generatedWord =
		firstWord + spacer1 + secondWord + spacer2 + thirdWord;
    } else {
        const newArray = adjectiveArray1.concat(adjectiveArray2)
        const firstWord =
		adjectiveArray1[Math.floor(Math.random() * adjectiveArray1.length)];
        const secondWord =
		adjectiveArray2[Math.floor(Math.random() * adjectiveArray2.length)];
        const thirdWord = wordArray[Math.floor(Math.random() * wordArray.length)];
        const spacer1 = spacerArray[Math.floor(Math.random() * spacerArray.length)];
        const spacer2 = spacerArray[Math.floor(Math.random() * spacerArray.length)];
        
        const generatedWord =
		firstWord + spacer1 + secondWord + spacer2 + thirdWord;
    }

	document.getElementById('generatedWord').innerHTML = generatedWord;
	console.log(wordArray[Math.floor(Math.random() * wordArray.length)]);
};

document
	.getElementById('generateButton')
	.addEventListener('click', generateUsername);
