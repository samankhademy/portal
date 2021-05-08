import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-ayiine-name',
  templateUrl: './ayiine-name.component.html',
  styleUrls: ['./ayiine-name.component.scss']
})
export class AyiineNameComponent implements OnInit, OnDestroy {
  isReadAll = false;
  isTimerEnded = false;
  private _timer: Subscription;
  constructor () { }


  ngOnInit(): void {
    this._timer = timer(2 * 1000).subscribe(c => this.isTimerEnded = true);
  }
  onScroll(event: { target: HTMLElement; }) {

    if (event.target.offsetHeight + event.target.scrollTop == event.target.scrollHeight) {
      this.isReadAll = true;
    }
  }
  ngOnDestroy(): void {
    this._timer.unsubscribe();
  }
}
