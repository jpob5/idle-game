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
		//console.log(money);
		this.MoneyService.money = parseInt(money);
		//console.log(loadFile);
		//document.cookie = 'autoclickers=' + JSON.stringify(AutoClickers) + '; expires=Thu, 1 Apr 2019 12:00:00 UTC; path=/';
		//document.cookie = 'money=' + this.MoneyService.money.toString() + '; expires=Thu, 1 Apr 2019 12:00:00 UTC; path=/';
	}

  constructor(private MoneyService: MoneyService) { }

  ngOnInit() {
  }

}
