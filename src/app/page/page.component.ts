import { Component, VERSION } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-page',
  template: `
  <markdown [src]="sourceFile$ | async" [srcRelativeLink]="true"></markdown>
  `,
})
export class PageComponent {
  sourceFile$ = this.route.data.pipe(
    map((data) => {
      return `assets/${data['file']}.md`;
    })
  );

  constructor(private route: ActivatedRoute) {}
}
