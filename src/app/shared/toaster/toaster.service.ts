import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

	show = false;
	message = '';
	toasterTimer = null;

	queue = [];

	showToaster(msg): void {
		if (this.show) {
			this.queue.push(msg);
		} else {
			this.message = msg;
			this.show = true;
			this.toasterTimer = setTimeout(()=> {
				this.hideToaster();
			}, 1500);
		}
	}

	hideToaster(): void {
		this.message = '';
		this.show = false;
		clearTimeout(this.toasterTimer);
		if (this.queue.length > 0) {
			this.toasterTimer = setTimeout(()=> {
				this.showToaster(this.queue[0]);
				this.queue.shift();
			}, 500);
		}
	}

  constructor() { }
}
