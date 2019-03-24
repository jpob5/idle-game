import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GeneralService {

	suffixes = ['','k','m','b','t','qa','qu','sx','sp','o','n', 'aa', 'ab', 'ac', 'ad'];

	goldenRatio = 1.1618;

	// Add a suffix and shorten large numbers
	// TODO: this is broken with really large numbers as 
	// JS changes the format of the number to 1.2345e10
	beautifyNumber(num): string {
		const numAsString = num.toString();
		const digits = numAsString.length - 1;
		const order = Math.floor(digits / 3);
		const suffix = this.suffixes[order];
		let newNumber = (num / Math.pow(1000, order)).toString();
		if (order > 0) {
			newNumber = (num / Math.pow(1000, order)).toFixed(2);
		}
		const beautifiedNumber = newNumber.toString() + suffix;
		return beautifiedNumber;
	}

	constructor() { }
}
function log(val) {
	console.log(val);
}