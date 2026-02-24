export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // KZT
  rating: number; // 1-5, decimals allowed
  image: string; // main image URL
  images: string[]; // gallery
  link: string; // kaspi.kz product page
}