import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingListItem } from '../../models';
import { ShoppingDataService } from '../../services/shopping-data.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  caption = 'Buy this stuff';

  stuff$: Observable<ShoppingListItem[]>

  constructor(private shoppingService: ShoppingDataService) { }

  ngOnInit(): void {
    this.stuff$ = this.shoppingService.getObservable();
  }

  onItemAdded(item: string) {
    console.log(item);
  }
}
