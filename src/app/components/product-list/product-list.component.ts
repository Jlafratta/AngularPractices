import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  productList: Array<Product> = []

  ngOnInit(): void {

    this.productService.getAll()
      .then(response => {
        this.productList = response;
      })
      .catch(error => {
        alert(error);
      });

  }

}
