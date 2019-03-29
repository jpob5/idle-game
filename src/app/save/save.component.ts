import { Component, OnInit } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

	saveGame(): void {
		console.log(AutoClickers);
		document.cookie = 'autoclickers=' + JSON.stringify(AutoClickers) + '; expires=Thu, 1 Apr 2019 12:00:00 UTC; path=/';
		document.cookie = 'money=' + this.MoneyService.money.toString() + '; expires=Thu, 1 Apr 2019 12:00:00 UTC; path=/';
	}

	constructor(private MoneyService: MoneyService) { }

	ngOnInit() {
	}

}
