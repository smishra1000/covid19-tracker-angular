import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getProducts() {
      return this.http.get('http://localhost:8080/getproductlist');
  }

  deleteProductById(id) {
    return this.http.delete('http://localhost:8080/deleteproduct/'+id);
  }

  saveProduct(product) {
    return this.http.post('http://localhost:8080/addproduct/',product);
  }
  getProductById(id){
    return this.http.get('http://localhost:8080/getproductbyid/'+id);
  }
}
