import { Component, OnInit } from '@angular/core';
import { AutoClicker } from './auto-clicker';
import { AutoClickers } from './list-of-auto-clickers';
import { AutoClickerService } from './auto-clicker.service';

@Component({
  selector: 'app-auto-clicker',
  templateUrl: './auto-clicker.component.html',
  styleUrls: ['./auto-clicker.component.scss']
})
export class AutoClickerComponent implements OnInit {

  autoClickers: AutoClicker[];

  getAutoClickers(): void {
		this.autoClickers = this.AutoClickerService.getAutoClickers();
  }
  
  addClicker(AutoClicker: AutoClicker): void {
    this.AutoClickerService.addClicker(AutoClicker);
  }

  constructor(private AutoClickerService: AutoClickerService) { }

  ngOnInit() {
    this.getAutoClickers();
  }

}
