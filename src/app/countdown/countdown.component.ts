import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {


  @Input() init: number = 0;
  public counter: number = 0;

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
    this.startCounDwon();
  }

  startCounDwon() {
    if (this.init && this.init > 0) {
      this.counter = this.init;
      this.doCountDown();
    }
  }

  doCountDown() {
    setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountDown();
    }, 1000)
  }

  processCountDown() {
    this.onDecrease.emit(this.counter);
    // emit event count
    console.log('count is ', this.counter);

    if (this.counter == 0) {
      // emit event counter end
      console.log('counter end');
    } else {
      this.doCountDown();
    }
  }

}
