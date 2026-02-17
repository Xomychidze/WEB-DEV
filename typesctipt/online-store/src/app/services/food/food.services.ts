import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: "Pizza What",
        price: 10, 
        cookTime: '10-20',
        favorite: false,
        origins: ['italy'],
        stars: 5.0,
        imageUrl: 'assets/images/OIP1.webp',
        tags: ['FastFood', 'Pizza', 'Lunch'], 
        description: "Пизаааа, мама мия что за шедевр"
      }, 
      {
        id: 2,
        name: "sHAURMA",
        price: 8, 
        cookTime: '10-20',
        favorite: false,
        origins: ['turkey'],
        stars: 4.0,
        imageUrl: 'assets/images/OIP2.webp',
        tags: ['FastFood', 'sHAURMA', 'Lunch'], 
        description: "Шаурма святая вещь студента " 
      }, 
      {
        id: 3,
        name: "Sup",
        price: 3, 
        cookTime: '10-20',
        favorite: false,
        origins: ['russian'],
        stars: 2.0,
        imageUrl: 'assets/images/OIP3.webp',
        tags: [ 'Sup', 'Lunch'], 
        description: "Супец гребец я так его люблю " 
      }, 
      {
        id: 4,
        name: "Burger Beef",
        price: 15, 
        cookTime: '10-20',
        favorite: true,
        origins: ['america'],
        stars: 2.0,
        imageUrl: 'assets/images/OIP4.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'], 
        description: "Бургер вкусный ммммммммммм"
      }, 
    ];
  }
}
