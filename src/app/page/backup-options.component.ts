import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { combineLatest, map, tap } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page-backup-options',
  template: `
  <markdown [src]="sourceFile$ | async" [srcRelativeLink]="true"></markdown>
  {{data$ | async }}
  `,
})
export class BackupOptionsComponent {
  data$ = combineLatest([this.route.data, this.dataService.data$]).pipe(
    tap((d) => console.log(d))
    // map((routeData, data) => {})
  );

  sourceFile$ = this.route.data.pipe(
    map((data) => {
      return `assets/${data['file']}.md`;
    })
  );

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
}
