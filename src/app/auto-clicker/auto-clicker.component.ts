import { Component, OnInit } from '@angular/core';
import { AutoClicker } from './auto-clicker';
import { AutoClickers } from './list-of-auto-clickers';
import { AutoClickerService } from './auto-clicker.service';
import { GeneralService } from '../shared/general.service';

@Component({
	selector: 'app-auto-clicker',
	templateUrl: './auto-clicker.component.html',
	styleUrls: ['./auto-clicker.component.scss']
})
export class AutoClickerComponent implements OnInit {

	autoClickers: AutoClicker[];

	oneMultiplier(): void {
		this.AutoClickerService.changeMultiplier(1);
	}
	tenMultiplier(): void {
		this.AutoClickerService.changeMultiplier(10);
	}
	hundredMultiplier(): void {
		this.AutoClickerService.changeMultiplier(100);
	}
	maxMultiplier(): void {
		this.AutoClickerService.changeMultiplier(0);
	}
	getAutoClickers(): void {
		this.autoClickers = this.AutoClickerService.getAutoClickers();
	}

	addClicker(AutoClicker: AutoClicker): void {
		this.AutoClickerService.addClicker(AutoClicker);
	}

	moneyPerSec(a): string {
		return this.AutoClickerService.calculateMoneyPerSec(a);
	}

	canBeBought(a): string {
		if (this.AutoClickerService.checkIfBuyable(a)) {
			return 'buyable';
		} else {
			return '';
		}
		
	}

	constructor(private AutoClickerService: AutoClickerService, private GeneralService: GeneralService) { }

	ngOnInit() {
		this.getAutoClickers();
	}

}
