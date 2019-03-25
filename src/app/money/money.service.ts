import { Injectable } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Injectable({
	providedIn: 'root'
})
export class MoneyService {

	money = 0;
	lastTick = 0;
	moneyPerSec = 0;

	addToMoney(amount): void {
		this.money += amount;
	}

	calculateMoneyPerSec(): void {
		let tempMoneyPerSec = this.money - this.lastTick;
		if (tempMoneyPerSec > 0) {
			this.moneyPerSec = this.money - this.lastTick;
		}
		this.lastTick = this.money;
	}

	loop(): void {
		this.calculateMoneyPerSec();
	}

	constructor(private GeneralService: GeneralService) { }
}
