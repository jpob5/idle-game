import { Component, OnInit } from '@angular/core';
import { MoneyService } from './money.service';

@Component({
	selector: 'app-money',
	templateUrl: './money.component.html',
	styleUrls: ['./money.component.scss']
})
export class MoneyComponent implements OnInit {

	money = this.MoneyService.money;

	constructor(private MoneyService: MoneyService) { }

	ngOnInit() {
	}

}
