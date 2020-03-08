import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../section.types';
import { TextParser } from '../text-parser';

@Component({
  selector: 'app-headings-to-sidebar',
  templateUrl: './headings-to-sidebar.component.html',
  styleUrls: ['./headings-to-sidebar.component.scss']
})
export class HeadingsToSidebarComponent implements OnInit {

  @Input() text: string;
  @Input() headingNumber: number;
  private nextHeading: number;
  private sections: Section[];
  private pageUrl: string;

  constructor( private parser: TextParser ) { }

  ngOnInit() {
    this.nextHeading = this.headingNumber + 1;
    this.pageUrl = window.location.href.split('#')[0];
    this.sections = this.parser.splitByHeading(this.text, this.headingNumber);
  }
}
