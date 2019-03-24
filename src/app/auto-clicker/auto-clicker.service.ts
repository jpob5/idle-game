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

	changeMultiplier(m): void {
		this.multiplier = m;
	}

	getAutoClickers(): AutoClicker[] {
		return AutoClickers;
	}

	checkThreshold(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlockThreshold <= this.MoneyService.money && !AutoClickers[a].unlocked) {
					AutoClickers[a].unlocked = true;
					//console.log(a+1);
					//AutoClickers[parseInt(a) + 1].shown = true;
				} 
			}
		}
	}

	checkVisibility(): void {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				if (AutoClickers[a].unlockThreshold / 2 <= this.MoneyService.money && !AutoClickers[a].shown) {
					AutoClickers[a].shown = true;
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

	loop(): void {
		this.checkThreshold();
		this.checkVisibility();
		this.autoClick();
	}

	constructor(private MoneyService: MoneyService, private GeneralService: GeneralService) { }
}
