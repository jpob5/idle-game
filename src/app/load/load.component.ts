import { Component, OnInit } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';
import { ToasterService } from '../shared/toaster/toaster.service';

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
		this.ToasterService.showToaster('Game Loaded!');
	}

  	constructor(private MoneyService: MoneyService, private ToasterService: ToasterService) { }

	ngOnInit() {
		this.loadAutoClickers();	
		this.loadMoney();
	}

}
