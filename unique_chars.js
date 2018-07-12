// write a program that outputs the largest set of unique characters 
// that can be removed from string w/out length dropping below 50

let originalParagraphString = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50. For example: [‘H’, ‘i’, ‘!’, ‘ ’]";
let characterFrequencies = {};
let sortedCharactersByFrequencies = [];
for (let i = 0; i < originalParagraphString.length; i++) {
	if (characterFrequencies[originalParagraphString[i]]) {
		characterFrequencies[originalParagraphString[i]]++;
	}
	else {
		characterFrequencies[originalParagraphString[i]] = 1;
	}
}
for (let key in characterFrequencies) {
	if (characterFrequencies.hasOwnProperty(key)) {
		sortedCharactersByFrequencies.push([key, characterFrequencies[key]]);
	}
}
sortedCharactersByFrequencies.sort(function(a,b) {
	return a[1] - b[1];
});
let acceptableLength = originalParagraphString.length;
let setOfUniqueCharacters = [];
let index = 0;
while (acceptableLength - sortedCharactersByFrequencies[index][1] >= 50) {
	acceptableLength -= sortedCharactersByFrequencies[index][1];
	setOfUniqueCharacters.push(sortedCharactersByFrequencies[index][0]);
	index++;
}
console.log(setOfUniqueCharacters);



