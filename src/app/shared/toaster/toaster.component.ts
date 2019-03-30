import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ToasterService } from './toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
@Injectable({
	providedIn: 'root'
  })
export class ToasterComponent implements OnInit {

	

	constructor(private ToasterService: ToasterService) { }

	ngOnInit() {
	}

}
