import {AfterContentInit, Component, OnInit} from '@angular/core';
import {TestServiceService} from "../services/test-service.service";

export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}

@Component({
  selector: 'app-gtm-part-module',
  templateUrl: './gtm-part-module.component.html',
  styleUrls: ['./gtm-part-module.component.css'],
  providers: [TestServiceService]
})
export class GtmPartModuleComponent implements OnInit, AfterContentInit {

  products: Product[] = [];

  constructor(private testService: TestServiceService) { }
  // constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.testService);
    this.testService.getProducts().subscribe(data => {

        this.products = data;
      },
      error =>  {
        console.log(error);
      });
    // this.products = this.testService.getProducts();
  }
}
