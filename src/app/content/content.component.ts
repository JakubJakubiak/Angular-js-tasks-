// content.component.ts
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  sectionTitle: string | undefined;
  sectionContent: string | undefined;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.sectionTitle$.subscribe((title) => (this.sectionTitle = title));
    this.contentService.sectionContent$.subscribe((content) => (this.sectionContent = content));
  }
}
