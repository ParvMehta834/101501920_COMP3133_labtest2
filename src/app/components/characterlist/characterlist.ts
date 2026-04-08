import { NgClass } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Character } from '../../models/character';
import { HarryPotterService } from '../../services/harry-potter.service';
import { Characterfilter } from '../characterfilter/characterfilter';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-characterlist',
  imports: [
    NgClass,
    RouterLink,
    Characterfilter,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css'
})
export class Characterlist implements OnInit {
  characters = signal<Character[]>([]);
  loading = signal<boolean>(true);
  selectedHouse = signal<string>('All');
  errorMessage = signal<string>('');
  searchText = signal<string>('');

  constructor(private hpService: HarryPotterService) {}

  ngOnInit(): void {
    this.loadAllCharacters();
  }

  loadAllCharacters(): void {
    this.loading.set(true);
    this.errorMessage.set('');

    this.hpService.getAllCharacters().subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load characters.');
        this.loading.set(false);
      }
    });
  }

  onHouseSelected(house: string): void {
    this.selectedHouse.set(house);

    if (house === 'All') {
      this.loadAllCharacters();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');

    this.hpService.getCharactersByHouse(house.toLowerCase()).subscribe({
      next: (data) => {
        this.characters.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load characters for selected house.');
        this.loading.set(false);
      }
    });
  }

  onSearchChange(value: string): void {
    this.searchText.set(value);
  }

  getFilteredCharacters(): Character[] {
    const search = this.searchText().trim().toLowerCase();

    return this.characters().filter((character) =>
      character.name?.toLowerCase().includes(search)
    );
  }

  getHouseClass(house: string): string {
    switch (house) {
      case 'Gryffindor':
        return 'gryffindor';
      case 'Slytherin':
        return 'slytherin';
      case 'Ravenclaw':
        return 'ravenclaw';
      case 'Hufflepuff':
        return 'hufflepuff';
      default:
        return 'no-house';
    }
  }
}