import { Injectable } from '@angular/core';
import { AutoClickerService } from '../auto-clicker/auto-clicker.service';

@Injectable({
	providedIn: 'root'
})
export class LoopService {

	tickCount = 0;

	loop() {
		this.tickCount++;
		this.AutoClicker.loop();
	}

	startLoop() {
		setInterval(()=> {
			this.loop();
		}, 1000);
	}

	constructor(private AutoClicker: AutoClickerService) { }
	
	ngOnInit() {
		setInterval(this.loop, 1000);
	}
}
