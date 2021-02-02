import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-lhs',
  templateUrl: './lhs.component.html',
  styleUrls: ['./lhs.component.scss']
})
export class LhsComponent implements OnInit {

  constructor(private service: MessageService) { }

  ngOnInit(): void {
  }

  setIt(val: string): void {
    this.service.setMessage(val);
  }
}
