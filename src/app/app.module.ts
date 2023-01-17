import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageComponent } from './page/page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

export const mdfiles = ['batteries', 'inverters', 'solarpanels', 'finance'];

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    data: {
      file: 'index',
    },
  },
  ...mdfiles.map((f) => ({
    path: f,
    component: PageComponent,
    data: {
      file: f,
    },
  })),
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  declarations: [AppComponent, HelloComponent, PageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
