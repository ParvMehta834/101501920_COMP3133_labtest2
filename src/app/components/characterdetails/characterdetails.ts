import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Character } from '../../models/character';
import { HarryPotterService } from '../../services/harry-potter.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-characterdetails',
  imports: [RouterLink, MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css'
})
export class Characterdetails implements OnInit {
  character = signal<Character | null>(null);
  loading = signal<boolean>(true);
  errorMessage = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private hpService: HarryPotterService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage.set('Character ID not found.');
      this.loading.set(false);
      return;
    }

    this.hpService.getCharacterById(id).subscribe({
      next: (data) => {
        this.character.set(data[0]);
        this.loading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load character details.');
        this.loading.set(false);
      }
    });
  }
}