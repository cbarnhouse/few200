import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-entry',
  templateUrl: './shopping-entry.component.html',
  styleUrls: ['./shopping-entry.component.scss']
})
export class ShoppingEntryComponent implements OnInit {

  form: FormGroup;
  @Output() itemAdded = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      item: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }

  get item(): AbstractControl { return this.form.get('item'); }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid) {
      this.itemAdded.emit(this.item.value);
    }
  }


}

