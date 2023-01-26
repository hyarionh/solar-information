import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { DataService } from './data.service';

export const mdfiles = ['backup-options', 'financing', 'hardware'];

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
  declarations: [AppComponent, PageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],

  bootstrap: [AppComponent],
  providers: [DataService],
})
export class AppModule {}
