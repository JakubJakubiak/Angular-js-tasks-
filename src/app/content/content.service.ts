// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ContentService {
//   private sectionTitleSource = new BehaviorSubject<string>('Witaj na stronie!');
//   sectionTitle$ = this.sectionTitleSource.asObservable();

//   private sectionContentSource = new BehaviorSubject<string>('To jest domyślna treść strony.');
//   sectionContent$ = this.sectionContentSource.asObservable();

//   changeContent(title: string, content: string): void {
//     this.sectionTitleSource.next(title);
//     this.sectionContentSource.next(content);
//   }
// }
