import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GeneralService {

	suffixes = ['','k','m','b'];

	goldenRatio = 1.1618;

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
