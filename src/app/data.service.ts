import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  private fileList = ['backup-options', 'batteries', 'home'];
  public data$ = new BehaviorSubject<{ file: string; data: any }[]>([]);
  public currentFile = '';

  constructor(private httpClient: HttpClient) {
    this.loadAllFiles();
  }

  public loadAllFiles() {
    // fetch all files
    this.fileList.forEach((file) => {
      this.fetchFile(file);
    });
  }

  public reloadCurrentFile() {
    this.fetchFile(this.currentFile);
  }

  public fetchFile(file: string) {
    this.httpClient
      .get(`assets/${file}.md`, { responseType: 'text' })
      .subscribe((data) => {
        const newData = [...this.data$.value];
        const index = newData.findIndex((d) => d.file === file);
        if (index === -1) {
          newData.push({ file, data });
        } else {
          newData[index] = { file, data };
        }
        this.data$.next(newData);
      });
  }
}
