import { Component, VERSION } from '@angular/core';
import { mdfiles } from './app.module';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  paths = [
    { name: 'home', url: '' },
    ...mdfiles.map((mf) => {
      if (typeof mf === 'string') {
        return {
          name: mf,
          url: mf,
        };
      } else {
        return mf;
      }
    }),
  ];

  constructor(private dataService: DataService) {}

  onReload() {
    // this.dataService.loadAllFiles();
    this.dataService.reloadCurrentFile();
  }
}
