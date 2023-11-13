// // content.service.ts
// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ContentService {
//   private sectionTitleSource = new BehaviorSubject<string>(' test');
//   sectionTitle$ = this.sectionTitleSource.asObservable();

//   private sectionContentSource = new BehaviorSubject<string>('This is the default content of the site.');
//   sectionContent$ = this.sectionContentSource.asObservable();

//   changeContent(title: string, content: string): void {
//     this.sectionTitleSource.next(title);
//     this.sectionContentSource.next(content);
//   }
// }


// content.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private sectionTitleSource = new BehaviorSubject<string>('Tytuł sekcji');
  sectionTitle$ = this.sectionTitleSource.asObservable();

  private sectionContentSource = new BehaviorSubject<any>(null);
  sectionContent$ = this.sectionContentSource.asObservable();

  changeContent(title: string, content: any): void {
    this.sectionTitleSource.next(title);
    this.sectionContentSource.next(content);
  }
}
