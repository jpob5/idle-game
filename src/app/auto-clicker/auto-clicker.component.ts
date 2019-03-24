import { Component, OnInit } from '@angular/core';
import { AutoClicker } from './auto-clicker';
import { AutoClickers } from './list-of-auto-clickers';
import { AutoClickerService } from './auto-clicker.service';

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

	constructor(private AutoClickerService: AutoClickerService) { }

	ngOnInit() {
		this.getAutoClickers();
	}

}
