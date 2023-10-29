import { Component, Input, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  product:any
  // products:Product | undefined;

  constructor(private route: ActivatedRoute){ }

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products[productIdFromRoute];
  }
}
