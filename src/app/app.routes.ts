import { Routes } from '@angular/router';
import { Characterlist } from './components/characterlist/characterlist';
import { Characterdetails } from './components/characterdetails/characterdetails';

export const routes: Routes = [
  { path: '', component: Characterlist },
  { path: 'character/:id', component: Characterdetails },
  { path: '**', redirectTo: '' }
];