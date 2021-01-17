import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'meli-landing',
  templateUrl: './meli-landing.component.html',
  styleUrls: ['./meli-landing.component.scss']
})
export class MeliLandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goPrueba() {
    debugger;
    this.router.navigate(['/items']);
  }

}
