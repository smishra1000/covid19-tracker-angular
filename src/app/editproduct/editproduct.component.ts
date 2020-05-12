import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: "app-editproduct",
  templateUrl: "./editproduct.component.html",
  styleUrls: ["./editproduct.component.css"],
})
export class EditproductComponent implements OnInit {

  product: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getProductById(id);
  }

  updateProduct() {
    this.productService.saveProduct(this.product).subscribe(() => {
      this.router.navigate(["/product-list"]);
    });
  }

  backToList() {
    this.router.navigate(["/product-list"]);
  }

  getProductById(id) {
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
    });
  }
}
