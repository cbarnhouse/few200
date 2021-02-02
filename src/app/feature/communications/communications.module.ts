import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsComponent } from './communications.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEntryComponent } from './components/shopping-entry/shopping-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingDataService } from './services/shopping-data.service';
import { LhsComponent } from './component/lhs/lhs.component';
import { RhsComponent } from './component/rhs/rhs.component';
import { MessageService } from './services/message.service';



@NgModule({
  declarations: [CommunicationsComponent, ShoppingComponent, ShoppingListComponent, ShoppingEntryComponent, LhsComponent, RhsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommunicationsComponent],
  providers: [
    ShoppingDataService,
    MessageService
  ]
})
export class CommunicationsModule { }
