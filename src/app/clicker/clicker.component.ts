import { Component, OnInit } from '@angular/core';
import { MoneyService } from '../money/money.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
	selector: 'app-clicker',
	templateUrl: './clicker.component.html',
	styleUrls: ['./clicker.component.scss']
})
export class ClickerComponent implements OnInit {

	click(): void {
		this.MoneyService.addToMoney(1);
	}

	constructor(private MoneyService: MoneyService) { }

	ngOnInit() {
	}

}
