import { Component, OnInit } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

	loadGame(): void {
		let autoClickers = document.cookie.match('(^|;) ?autoclickers=([^;]*)(;|$)');
		let ac = JSON.parse(autoClickers[2]);
		for (let a in AutoClickers) {
			if (AutoClickers.hasOwnProperty(a)) {
				AutoClickers[a] = ac[a];
			}
		}
		let money = document.cookie.match('(^|;) ?money=([^;]*)(;|$)')[2];
		this.MoneyService.money = parseInt(money);
	}

  constructor(private MoneyService: MoneyService) { }

  ngOnInit() {
	let autoClickers = document.cookie.match('(^|;) ?autoclickers=([^;]*)(;|$)');
	let ac = JSON.parse(autoClickers[2]);
	for (let a in AutoClickers) {
		if (AutoClickers.hasOwnProperty(a)) {
			AutoClickers[a] = ac[a];
		}
	}
	let money = document.cookie.match('(^|;) ?money=([^;]*)(;|$)')[2];
	this.MoneyService.money = parseInt(money);
  }

}
