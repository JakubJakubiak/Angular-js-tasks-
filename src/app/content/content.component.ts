// content.component.ts
import { Component, OnInit, ViewChild, ViewContainerRef  } from '@angular/core';
import { ContentService } from '../content.service';
import { LargestNumber } from '../app.component';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  sectionTitle: string | undefined;
  dynamicContent: any;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.sectionTitle$.subscribe((title) => (this.sectionTitle = title));
    this.contentService.sectionContent$.subscribe((content) => (this.dynamicContent = content));
  }
}

// dynamicComponent: any = LargestNumber; // Adjust the type based on your actual component type
// @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef | undefined;

// constructor(private contentService: ContentService) {}

// ngOnInit(): void {
//   this.contentService.sectionTitle$.subscribe((title) => (this.sectionTitle = title));
// }

// changeContent(content: string) {
//   this.contentService.sectionTitle$(content);

//   // Assuming all sections are associated with the same component (LargestNumber)
//   this.dynamicComponent = LargestNumber;
// }
// }
