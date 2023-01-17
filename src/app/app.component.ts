import { Component, VERSION } from '@angular/core';
import { mdfiles } from './app.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paths = mdfiles;
}
