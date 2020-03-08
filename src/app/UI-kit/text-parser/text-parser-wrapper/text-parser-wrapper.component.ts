import { Component, OnInit, Input } from '@angular/core';
import { ShortCode } from '../short-code.types';

@Component({
  selector: 'app-text-parser-wrapper',
  templateUrl: './text-parser-wrapper.component.html',
  styleUrls: ['./text-parser-wrapper.component.scss']
})
export class TextParserWrapperComponent implements OnInit {

  @Input() text: string;
  @Input() headingNumber: number;

  constructor() { }

  ngOnInit() {}
}
