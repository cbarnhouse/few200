import { Injectable } from '@angular/core';
import { ShoppingListItem } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingDataService {

  private fakeData: ShoppingListItem[] = [
    { id: '1', description: 'Ice Cream', purchased: false }
  ]
  private subject = new BehaviorSubject<ShoppingListItem[]>(this.fakeData);
  private maxId = 3


  getObservable(): Observable<ShoppingListItem[]> {
    return this.subject.asObservable();
  }

  addItem(description: string): void {
    this.fakeData.push({ id: (this.maxId++).toString(), description, purchased: false })
    this.subject.next(this.fakeData);
  }

  markItemAsPurchased(item: ShoppingListItem): void {
    const storedItem = this.fakeData.filter(item => item.id)[0].purchased = true;
    this.subject.next(this.fakeData);
  }


  constructor() { }
}
