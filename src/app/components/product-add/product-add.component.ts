import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/service/category.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productCategoryId: number;
  name: string;
  description: string;
  price: number;

  categories: Array<Category> = []
  msg: string;

  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll()
      .then(response => {
        this.categories = response;
      })
      .catch(error => {
        alert(error);
      })
  }

  addProduct(){
    let prod = new Product();
    // prod.productCategoryId = this.productCategoryId;
    // prod.productId = 0;
    prod.productCategoryId = this.productCategoryId;
    prod.name = this.name;
    prod.description = this.description;
    prod.price = this.price;

    this.productService.add(prod)
      .then(response => {
        this.msg = "Product successfully added";
      })
      .catch(error => {
        alert(error);
      })

      
  }

}
