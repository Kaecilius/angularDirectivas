import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-styles></app-ng-styles>

      <app-css></app-css>

      <p>
        hola mundo desde app component 
      </p>

      <app-clases></app-clases>
      <p [appResaltado] ="'orange'">
        Hola Mundo
      </p>

      <app-ng-switch></app-ng-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
