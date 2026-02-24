import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../data/products';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: `
    @if (product) {
      <h2>{{ product.name }}</h2>
      <app-product-gallery [product]="product"></app-product-gallery>
      <p>{{ product.description }}</p>
      <div class="price">{{ product.price }} ₸</div>
      <div class="rating">⭐ {{ product.rating }} / 5</div>
      <a [href]="product.link" target="_blank">Open on Kaspi</a>
    } 
  `,
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent {

  product?: Product;
  

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products.find(p => p.id === id);
  }
}