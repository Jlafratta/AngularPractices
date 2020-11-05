import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiURL = 'https://utn-avanzada2-tp-final.herokuapp.com/api'

  constructor(private http: HttpClient) { }

  getById(id): Promise<any>{
    return this.http.get(this.apiURL + '/Product/' + id)
      .toPromise();
  }

  getAll(): Promise<any>{
    return this.http.get(this.apiURL + '/Product')
      .toPromise();
  }

}
