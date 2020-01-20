import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  firstNumber = localStorage.getItem('firstNumber')
  secondNumber = localStorage.getItem('secondNumber')
  constructor() { }

  ngOnInit() {
    
  }
  apptrue() {
    if (this.firstNumber && this.secondNumber) {
      return true;
    } else{
      return false;
    }
  }
}
