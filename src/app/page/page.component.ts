import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
  <markdown [src]="'assets/index.md'" [srcRelativeLink]="true"></markdown>
  `,
})
export class PageComponent {}
