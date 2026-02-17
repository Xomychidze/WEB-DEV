import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span *ngFor="let star of stars; let i = index"
          (click)="setRating(i + 1)"
          [style.color]="i < rating ? 'red' : 'gray'"
          style="cursor: pointer; font-size: 18px;">
      ★
    </span>
  `
})
export class StarRatingComponent {
  @Input() rating = 0;        
  @Input() readonly = false;  
  stars = Array(5).fill(0);   

  setRating(value: number) {
    if (!this.readonly) {
      this.rating = value;
    }
  }
}
