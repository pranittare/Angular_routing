import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  clicked = false;
  thirdNumber: number;
  public additon;
  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.additon = id;
  }
  onNavigate(){
    localStorage.removeItem('firstNumber');
    localStorage.removeItem('secondNumber');
    this.router.navigate(['/about']);

  }

}
