import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-addproduct",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.css"],
})
export class AddproductComponent implements OnInit {
  product: any;

  constructor(private productService: ProductService, private router: Router) {
    this.product = {};
  }

  ngOnInit() {}

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe(() => {
      this.router.navigate(["/product-list"]);
    });
  }

  backToList() {
    this.router.navigate(["/product-list"]);
  }
}
