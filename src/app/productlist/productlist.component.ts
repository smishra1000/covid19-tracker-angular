import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import {Router} from '@angular/router';

@Component({
  selector: "app-productlist",
  templateUrl: "./productlist.component.html",
  styleUrls: ["./productlist.component.css"],
})
export class ProductlistComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService, private router:Router) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id){
    this.productService.deleteProductById(id).subscribe((data) => {
      this.getAllProducts();
    });
  }

  addproduct(){
    this.router.navigate(['/addproduct']);
  }

  editProduct(id) {
    this.router.navigate(['/editproduct',id]);
  }
}
