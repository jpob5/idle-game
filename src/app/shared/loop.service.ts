import { Injectable } from '@angular/core';
import { AutoClickerService } from '../auto-clicker/auto-clicker.service';
import { MoneyService } from '../money/money.service';
import { SaveService } from '../save/save.service';

@Injectable({
	providedIn: 'root'
})
export class LoopService {

	tickCount = 0;

	loop() {
		this.tickCount++;
		this.AutoClicker.loop();
		this.MoneyService.loop();
		this.SaveService.loop();
	}

	startLoop() {
		setInterval(()=> {
			this.loop();
		}, 1000);
	}

	constructor(private AutoClicker: AutoClickerService, 
		private MoneyService: MoneyService, 
		private SaveService: SaveService) { }

}
