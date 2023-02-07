import { Component } from '@angular/core';

@Component({
  selector: 'angular-nestjs-monorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-front';
  response = fetch('http://localhost:3333/api').then((res) => res.json());
}
