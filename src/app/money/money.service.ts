import { Injectable } from '@angular/core';
import { GeneralService } from '../shared/general.service';

@Injectable({
	providedIn: 'root'
})
export class MoneyService {

	money = 0;
	//money = 1234567890123456789012345678901;

	addToMoney(amount): void {
		this.money += amount;
	}

	constructor(private GeneralService: GeneralService) { }
}
