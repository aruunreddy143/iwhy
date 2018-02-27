import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

    counter: number=0;

  constructor() { }

  ngOnInit() {
  }

  increaseByOne() {
      this.counter = this.counter + 1;
  }
  decreaseByOne() {
      this.counter = this.counter - 1;
  }

  

}
