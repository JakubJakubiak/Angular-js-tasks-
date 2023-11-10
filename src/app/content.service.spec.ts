import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private sectionTitleSource = new BehaviorSubject<string>('Section title');
  sectionTitle$ = this.sectionTitleSource.asObservable();

  private sectionContentSource = new BehaviorSubject<any>(null);
  sectionContent$ = this.sectionContentSource.asObservable();

  changeContent(title: string, content: any): void {
    this.sectionTitleSource.next(title);
    this.sectionContentSource.next(content);
  }
}
