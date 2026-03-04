import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [], // ← remove RouterLink if home.html has no routerLink
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}