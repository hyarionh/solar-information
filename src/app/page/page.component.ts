import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { combineLatest, map, tap, debounceTime } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page',
  template: `
  <markdown [data]="data$ | async"></markdown>
  `,
})
export class PageComponent {
  data$ = combineLatest([this.route.data, this.dataService.data$]).pipe(
    tap((d) => console.log(d)),
    tap(([routeData, data]) => (this.dataService.currentFile = routeData.file)),
    map(
      ([routeData, data]) => data.find((d) => d.file === routeData.file)?.data
    )
    // tap((d) => {
    //   console.log(d, this.dataService.data$.value);
    //   setTimeout(() => {
    //     this.markdownService.reload();
    //   });
    // })
  );

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private markdownService: MarkdownService
  ) {}
}
