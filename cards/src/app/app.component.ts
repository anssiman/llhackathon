import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  method: string = 'firebase'; // firebase real time database or http
  title = 'Vertex Lottery';
}
