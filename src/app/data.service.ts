import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  public data$ = new BehaviorSubject<{ file: string; data: any }[]>([]);

  constructor(private httpClient: HttpClient) {}

  public fetchFile(file: string) {
    this.httpClient.get(`assets/${file}.md`).subscribe((data) => {
      this.data$.next([
        ...this.data$.value,
        {
          file,
          data,
        },
      ]);
    });
  }
}
