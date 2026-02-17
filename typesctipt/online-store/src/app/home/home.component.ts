import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.services';
import { Food } from '../shared/models/Food';
import { StarRatingComponent } from '../services/star/star.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  openedFoodId: number | null = null;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }

  toggleDescription(id: number) {
    this.openedFoodId = this.openedFoodId === id ? null : id;
  }

}
