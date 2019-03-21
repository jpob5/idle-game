import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MoneyService {

	money = 0;

	addToMoney(amount): void {
		this.money += amount;
	}

	constructor() { }
}
