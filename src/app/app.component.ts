import { Component } from '@angular/core';
import { MoneyService } from './money/money.service';
import { LoopService } from './shared/loop.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'Idle Game';	
	constructor(private MoneyService: MoneyService, private LoopService: LoopService) {}
	ngOnInit() {
		this.LoopService.startLoop();
	}
}
