import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor(private productService: ProductService,private route: ActivatedRoute) { }

  product: Product;

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id)
    .then(response => {
      this.product = response;
    })
    .catch(error => {
      alert(error);
    });
  }

}
