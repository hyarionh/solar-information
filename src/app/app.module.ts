import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PageComponent } from './page/page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
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
