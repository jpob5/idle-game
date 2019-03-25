import { Injectable } from '@angular/core';
import { AutoClickerService } from '../auto-clicker/auto-clicker.service';
import { MoneyService } from '../money/money.service';

@Injectable({
	providedIn: 'root'
})
export class LoopService {

	tickCount = 0;

	loop() {
		this.tickCount++;
		this.AutoClicker.loop();
		this.MoneyService.loop();
	}

	startLoop() {
		setInterval(()=> {
			this.loop();
		}, 1000);
	}

	constructor(private AutoClicker: AutoClickerService, private MoneyService: MoneyService) { }

}
