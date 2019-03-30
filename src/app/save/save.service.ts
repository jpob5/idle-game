import { Injectable } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';
import { ToasterService } from '../shared/toaster/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

	tickCount = 0;

	saveGame(): void {
		document.cookie = 'autoclickers=' + JSON.stringify(AutoClickers) + '; expires=Thu, 1 Apr 2019 12:00:00 UTC; path=/';
		document.cookie = 'money=' + this.MoneyService.money.toString() + '; expires=Thu, 1 Apr 2019 12:00:00 UTC; path=/';
		this.ToasterService.showToaster('Game Saved!');
	}

	loop(): void {
		this.tickCount++;
		if (this.tickCount >= 60) {
			this.saveGame();
			this.tickCount = 0;
		}
	}

	constructor(private MoneyService: MoneyService, private ToasterService: ToasterService) { }
}
