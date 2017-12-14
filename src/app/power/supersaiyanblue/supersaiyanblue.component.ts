import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyanblue',
  templateUrl: './supersaiyanblue.component.html',
  styleUrls: ['./supersaiyanblue.component.css']
})
export class SupersaiyanblueComponent implements OnInit {
	@Input() power;
  constructor() { }

  ngOnInit() {
		this.power *= 500;
  }
}
