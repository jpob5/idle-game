import { Injectable } from '@angular/core';
import { AutoClicker } from './auto-clicker';
import { AutoClickers } from './list-of-auto-clickers';
import { MoneyService } from '../money/money.service';

@Injectable({
  	providedIn: 'root'
})
export class AutoClickerService {

	getAutoClickers(): AutoClicker[] {
		return AutoClickers;
	}

	checkThreshold(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlockThreshold <= this.MoneyService.money && !AutoClickers[a].unlocked) {
					AutoClickers[a].unlocked = true;
				} 
			}
		}
	}

	autoClick(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlocked) {
					this.addMoney(a, AutoClickers[a].count);
				}
			}
		}
	}

	addMoney(id, amount): void {
		for (let i = 0; i < amount; i++) {
			this.MoneyService.money += AutoClickers[id].reward;
		}
	}

	addClicker(a): void {
		if (a.cost <= this.MoneyService.money) {
			a.count++;
			this.MoneyService.money -= a.cost;
		}
	}

	loop(): void {
		this.checkThreshold();
		this.autoClick();
	}

	constructor(private MoneyService: MoneyService) { }
}
