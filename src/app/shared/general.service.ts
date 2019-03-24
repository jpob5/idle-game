import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GeneralService {

	suffixes = ['','k','m','b','t','qa','qu','sx','sp','o','n', 'aa', 'ab', 'ac', 'ad'];

	goldenRatio = 1.1618;

	beautifyNumber(num): string {
		const numAsString = num.toString();
		//log('numAsString ' + numAsString);
		const digits = numAsString.length - 1;
		//log('digits ' + digits);
		const order = Math.floor(digits / 3);
		//log('order ' + order);
		const suffix = this.suffixes[order];
		//log('suffix ' + suffix);
		let newNumber = (num / Math.pow(1000, order)).toString();
		if (order > 0) {
			newNumber = (num / Math.pow(1000, order)).toFixed(2);
		}
		//log('newNumber ' + newNumber);
		const beautifiedNumber = newNumber.toString() + suffix;
		//log('beautifiedNumber ' + beautifiedNumber);
		return beautifiedNumber;
	}

	constructor() { }
}
function log(val) {
	console.log(val);
}