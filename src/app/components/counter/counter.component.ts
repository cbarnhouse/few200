import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  current = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.current += 1;
  }

  decrement(): void {
    this.current -= 1;
  }

}
