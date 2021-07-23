import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
})
export class SearchListComponent implements OnInit {
  products: any = [];
  allProducts: any = [];
  currentProduct = null;
  currentIndex = -1;
  name = '';
  image = '';
  constructor(private searchService: SearchService) {}

  // handleMessage(e: any): void {
  //   // Reference to element for data display
  //   // Check origin
  //   console.log(e);
  // }

  ngOnInit(): void {
    // window.addEventListener('message', this.handleMessage, false);
    window.onmessage = (e) => {
      this.products = e.data;
      this.allProducts = e.data;
    };
    this.searchService.getProducts(this.products);
    this.products = this.searchService.loadusers();
  }

  // handleMessage(e: any): void {
  //   // var el: any = document.getElementById('display');
  //   // if (e.origin === 'http://localhost:4200') {
  //   //   el.innerHTML = e.data;
  //   //   e.source.postMessage('Message received', e.origin);
  //   // }
  // }

  readProducts(): void {}
  refresh(): void {
    this.readProducts();
    this.currentProduct = null;
    this.currentIndex = -1;
  }
  searchByName(): void {
    this.searchService.getProducts(this.allProducts);
    this.products = this.searchService.filterProduct(this.name);
  }
}
