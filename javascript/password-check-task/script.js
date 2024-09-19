var _ = require('lodash');

// 1.
var dobro = "1234567890";
var lose = "1123456";

var jedinstveniZnakovi = function(password) {
	// vas kod
	const passArray = password.split('');
	const uniqueArray = _.uniq(passArray);
	
	return uniqueArray;
};

var areAllItemsNumbers = function(arr) {
	const filteredArray = arr.filter(function(item) {
		const tempItem = +item;
		if (!Number.isNaN(tempItem)) {
			return tempItem
		}
	})
	return filteredArray;
}

var skratiArray = function(arr) {
	if (arr.length > 10) {
		return arr.slice(0,10);
	}
	return arr;
}

var runChecks = function(pass) {
	const uniqueArr = jedinstveniZnakovi(pass);
	const justNumbersArr = areAllItemsNumbers(uniqueArr);
	const shortArr = skratiArray(justNumbersArr);
	return shortArr.join('');
}

console.log('dobar pass:', runChecks(dobro));
console.log('los pass:', runChecks(lose));
