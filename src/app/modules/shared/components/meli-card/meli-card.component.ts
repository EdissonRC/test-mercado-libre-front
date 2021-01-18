import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'meli-card',
  templateUrl: './meli-card.component.html',
  styleUrls: ['./meli-card.component.scss']
})
export class MeliCardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public goProductDetail(): void {
    this.route.navigate(['/items', 2]);
  }

}
