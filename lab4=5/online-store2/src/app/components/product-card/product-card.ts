import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterLink } from '@angular/router';
import { ProductGalleryComponent } from '../product-gallery/product-gallery';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, ProductGalleryComponent],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  product = input.required<Product>();

  share() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product().link
    )}`;
    window.open(url, '_blank');
  }
}