import { Component, OnInit } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

	autoClickers = [
		{
			id: 0,
			name: 'Clicker 1',
			cost: 10,
			count: 0,
			reward: 1,
			unlocked: false,
			unlockThreshold: 10,
			shown: true
		},
		{
			id: 1,
			name: 'Clicker 2',
			cost: 161,
			count: 0,
			reward: 10,
			unlocked: false,
			unlockThreshold: 161,
			shown: false
		},
		{
			id: 2,
			name: 'Clicker 3',
			cost: 2592,
			count: 0,
			reward: 100,
			unlocked: false,
			unlockThreshold: 2592,
			shown: false
		},
		{
			id: 3,
			name: 'Clicker 4',
			cost: 41732,
			count: 0,
			reward: 1000,
			unlocked: false,
			unlockThreshold: 41732,
			shown: false
		},
		{
			id: 4,
			name: 'Clicker 5',
			cost: 671898,
			count: 0,
			reward: 10000,
			unlocked: false,
			unlockThreshold: 671898,
			shown: false
		},
		{
			id: 5,
			name: 'Clicker 6',
			cost: 10817561,
			count: 0,
			reward: 100000,
			unlocked: false,
			unlockThreshold: 10817561,
			shown: false
		},
		{
			id: 6,
			name: 'Clicker 7',
			cost: 174162743,
			count: 0,
			reward: 1000000,
			unlocked: false,
			unlockThreshold: 174162743,
			shown: false
		},
		{
			id: 7,
			name: 'Clicker 8',
			cost: 2804020163,
			count: 0,
			reward: 10000000,
			unlocked: false,
			unlockThreshold: 2804020163,
			shown: false
		}
	];

	resetGame() {
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				AutoClickers[a] = this.autoClickers[a];
			}
		}
		this.MoneyService.money = 0;
	}

  	constructor(private MoneyService: MoneyService) { }

	ngOnInit() {
	}

}
