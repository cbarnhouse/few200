import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListItem } from '../../models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() caption: string;
  @Input() items: ShoppingListItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
