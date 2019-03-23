import { Injectable } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Injectable({
	providedIn: 'root'
})
export class MoneyService {

	money = 0;

	addToMoney(amount): void {
		this.money += amount;
	}

	constructor(private GeneralService: GeneralService) { }
}
