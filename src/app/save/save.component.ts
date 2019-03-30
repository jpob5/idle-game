import { Component, OnInit } from '@angular/core';
import { AutoClickers } from '../auto-clicker/list-of-auto-clickers';
import { MoneyService } from '../money/money.service';
import { SaveService } from '../save/save.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

	saveGame(): void {
		this.SaveService.saveGame();
	}

	constructor(private MoneyService: MoneyService, private SaveService: SaveService) { }

	ngOnInit() {
	}

}
