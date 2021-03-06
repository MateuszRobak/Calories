import { Component } from '@angular/core';
import { Product } from '../models/product.model'

@Component({
    selector: "app-product-menu",
    templateUrl: "./product-menu.component.html",  
    styleUrls: ["./product-menu.component.css"] 
})
export class ProductMenu{
    fruits: Product[] = [
        new Product(0,"Apple", 0, 0.52,0),
        new Product(1, "Banana", 0, 0.88,0),        
        new Product(2, "Orange", 0, 0.47,0),
    ]  
}

