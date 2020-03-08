import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../section.types';
import { TextParser } from '../text-parser';

@Component({
  selector: 'app-headings-to-sections',
  templateUrl: './headings-to-sections.component.html',
  styleUrls: ['./headings-to-sections.component.scss']
})
export class HeadingsToSectionsComponent implements OnInit {

  @Input() text: string;
  @Input() headingNumber: number;
  private nextHeading: number;
  private sections: Section[];

  constructor( private parser: TextParser ) { }

  ngOnInit() {
    this.nextHeading = this.headingNumber + 1;
    this.text = this.parser.replaceShortCodes(this.text);
    this.sections = this.parser.splitByHeading(this.text, this.headingNumber);
  }
}
