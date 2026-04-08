import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css'
})
export class Characterfilter {
  @Output() houseSelected = new EventEmitter<string>();

  houses = ['All', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  selectedHouse = signal('All');

  houseControl = new FormControl('All');

  constructor() {
    this.houseControl.valueChanges.subscribe((value) => {
      const selected = value || 'All';
      this.selectedHouse.set(selected);
      this.houseSelected.emit(selected);
    });
  }
}