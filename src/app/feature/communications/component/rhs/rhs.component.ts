import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-rhs',
  templateUrl: './rhs.component.html',
  styleUrls: ['./rhs.component.scss']
})
export class RhsComponent implements OnInit {

  sub: Subscription
  isEven$: Observable<boolean>;
  message$: Observable<string>;
  message = "";
  constructor(private service: MessageService) { }

  ngOnInit(): void {
    this.message$ = this.service.getMessageObservable();

    this.isEven$ = this.service
      .getMessageObservable()
      .pipe(
        map(val => val.length % 2 === 0)
      );

    this.sub = this.service
      .getMessageObservable()
      .pipe(
        tap(val => console.log(val))
      ).subscribe();
  }

  doIt(): void {
    this.message = this.service.getMessage();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
