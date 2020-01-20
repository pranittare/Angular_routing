import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clicked = false;
  firstNumber: number;
  constructor(private router:Router) { }

  ngOnInit() {
    if (localStorage.getItem('firstNumber') || localStorage.getItem('secondNumber')) {
      
      localStorage.removeItem('firstNumber');
      localStorage.removeItem('secondNumber')
    }

  }
  onRandomNumber() {
    this.clicked = true;
    this.firstNumber = Math.floor((Math.random()*10)+1);
    console.log(this.firstNumber)
    
    localStorage.setItem('firstNumber', this.firstNumber.toLocaleString())
  }
  onNavigate(){
    this.router.navigate(['/products',this.firstNumber]);

  }

}
