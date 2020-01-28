import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  firstNumber = localStorage.getItem('firstNumber')
  secondNumber = localStorage.getItem('secondNumber')
  constructor() { }
  bothNumbers = false;
  isPresent() {
    const promise = new Promise(
      (resolve) =>{
        resolve(this.bothNumbers)
      }
    );
    return promise;
  }
  present() {
    if (this.firstNumber && this.secondNumber) {
      this.bothNumbers = true;
    }
  }
  absent() {
    if (!this.firstNumber && !this.secondNumber) {
      this.bothNumbers = false;
    }
  }
}
