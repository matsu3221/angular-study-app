import { Component, Input } from '@angular/core';
import { products } from 'src/app/products';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss'],
})
export class ProductListComponent {

  products = products;

  constructor(){
  }

  ngOnInit(){
    
  }

}
