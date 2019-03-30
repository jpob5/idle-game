import { Component, OnInit } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

	loadAutoClickers(): void {
		let autoClickers = document.cookie.match('(^|;) ?autoclickers=([^;]*)(;|$)');
		let ac = JSON.parse(autoClickers[2]);
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				AutoClickers[a] = ac[a];
			}
		}
	}

	loadMoney(): void {
		let money = document.cookie.match('(^|;) ?money=([^;]*)(;|$)')[2];
		this.MoneyService.money = parseInt(money);
	}

	loadGame(): void {
		this.loadAutoClickers();	
		this.loadMoney();	
	}

  	constructor(private MoneyService: MoneyService) { }

	ngOnInit() {
		this.loadAutoClickers();	
		this.loadMoney();
	}

}
