// menu.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private contentService: ContentService) {}

  ngOnInit(): void {}

  changeContent(section: string): void {
    const content = `${section.toLowerCase()}.`;
    this.contentService.changeContent(section, content);
  }
}
