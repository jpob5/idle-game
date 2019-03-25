import { Injectable } from '@angular/core';
import { AutoClicker } from './auto-clicker';
import { AutoClickers } from './list-of-auto-clickers';
import { MoneyService } from '../money/money.service';
import { GeneralService } from '../shared/general.service';

@Injectable({
  	providedIn: 'root'
})
export class AutoClickerService {

	multiplier = 1;

	// Changes the amount the is bought on click
	changeMultiplier(m): void {
		this.multiplier = m;
	}

	getAutoClickers(): AutoClicker[] {
		return AutoClickers;
	}

	// Check to see if auto-clicker can be bought
	// TODO: not sure if this is still needed
	checkThreshold(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlockThreshold <= this.MoneyService.money && !AutoClickers[a].unlocked) {
					AutoClickers[a].unlocked = true;
				} 
			}
		}
	}

	// Show the auto-clicker when they have half the cost 
	// so that the player knows what to save up for
	checkVisibility(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlockThreshold / 2 <= this.MoneyService.money && !AutoClickers[a].shown) {
					AutoClickers[a].shown = true;
				} 
			}
		}
	}

	// Add money for each type of auto-clicker
	autoClick(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlocked) {
					this.addMoney(a, AutoClickers[a].count);
				}
			}
		}
	}

	// Add money for the number of auto-clickers
	addMoney(id, amount): void {
		for (let i = 0; i < amount; i++) {
			this.MoneyService.money += AutoClickers[id].reward;
		}
	}

	// Add to the number of auto-clickers
	addClicker(a): void {
		let enoughMoney = true;
		let tempMoney = this.MoneyService.money;
		let tempCost = a.cost;
		for (let i = 0; i < this.multiplier; i++) {
			if (tempCost > tempMoney) {
				enoughMoney = false;
			} else {
				tempMoney -= tempCost;
				tempCost = Math.floor(tempCost * this.GeneralService.goldenRatio);
			}
		}
		if (enoughMoney && this.multiplier > 0) {
			a.count += this.multiplier;
			this.MoneyService.money = tempMoney;
			a.cost = tempCost;
		} else if (this.multiplier === 0) {
			while (enoughMoney) {
				if (a.cost > this.MoneyService.money) {
					enoughMoney = false;
				} else {
					a.count++;
					this.MoneyService.money -= a.cost;
					a.cost = Math.floor(a.cost * this.GeneralService.goldenRatio);
				}
			}
		}
	}

	calculateMoneyPerSec(a): string {
		let moneyPerSec = a.reward * a.count;
		return '$' + moneyPerSec + '/s';
	}

	loop(): void {
		this.checkThreshold();
		this.checkVisibility();
		this.autoClick();
	}

	constructor(private MoneyService: MoneyService, private GeneralService: GeneralService) { }
}
