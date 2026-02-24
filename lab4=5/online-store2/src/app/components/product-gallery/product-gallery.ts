import { Component, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  templateUrl: './product-gallery.html',
  styleUrls: ['./product-gallery.css'],
  imports: [] // <- добавляем сюда
 // <- добавляем сюда
})
export class ProductGalleryComponent {
  product = input.required<Product>();
  currentIndex = signal(0);

  prev() {
    const idx = this.currentIndex();
    this.currentIndex.set(idx > 0 ? idx - 1 : this.product().images.length - 1);
  }

  next() {
    const idx = this.currentIndex();
    this.currentIndex.set(idx < this.product().images.length - 1 ? idx + 1 : 0);
  }

  select(index: number) {
    this.currentIndex.set(index);
  }
}