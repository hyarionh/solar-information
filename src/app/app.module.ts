import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageComponent } from './page/page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { DataService } from './data.service';
import { BackupOptionsComponent } from './page/backup-options.component';

export const mdfiles = [
  'backup-options',
  'batteries',
  'inverters',
  'solarpanels',
  'finance',
];

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    data: {
      file: 'home',
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
  declarations: [AppComponent, PageComponent, BackupOptionsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],

  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
