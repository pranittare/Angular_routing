import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  clicked = false;
  secondNumber: number;
  public previousNumber;
  constructor(private router: Router, private actRoute: ActivatedRoute) { }
  

  ngOnInit() { 
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.previousNumber = id
  }

  onRandomNumber() {
    this.clicked = true;
    this.secondNumber = Math.floor((Math.random()*10)+1);
    console.log(this.secondNumber)
    if (!this.previousNumber) {
      alert("Go Back to the home page and then start");
    } else {

      localStorage.setItem('secondNumber', this.secondNumber.toLocaleString())
    }

  }

  onNavigate(){
    const addition = +this.secondNumber + +this.previousNumber
    // const higherNumber = localStorage.setItem(add, addition)
    if (!this.previousNumber) {
      this.router.navigate(['/home']);
      localStorage.removeItem('secondNumber');
    } else{

      this.router.navigate(['/application', (addition)]);
    }

  }
}
