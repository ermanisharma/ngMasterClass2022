import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product={
  Id:"1",
  Title:"Pen",
  Price:200
}
height=50;
width=100;
name:string="";
isProductDisplayed:boolean=false;
productButtonMsg:string="Show";
  constructor(private cd:ChangeDetectorRef) {
    //this.cd.detach();
   }

  ngOnInit(): void {
  }
  showProducts(){
    this.isProductDisplayed =!this.isProductDisplayed;
    this.productButtonMsg = this.isProductDisplayed ?"Hide":"Show";
}
}
