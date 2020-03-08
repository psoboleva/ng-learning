import { Injectable } from '@angular/core';
import { Section } from './section.types';
import { TextShortCodes } from './short-codes.config';

@Injectable({
  providedIn: 'root'
})

export class TextParser {

    public splitByHeading(text: string, startFrom: number): Section[] {
        const sections: Section[] = [];
        if(text.indexOf('<h' + startFrom + '>') > -1) { 
          const split: string[] = text.split('<h' + startFrom + '>');
          split.forEach(chunk => {
            const split2: string[] = chunk.split('</h' + startFrom + '>');
            const title: string = split2[0];
            const content: string = split2[1];
            const anchor: string = title.replace(/[^a-z0-9+]+/gi, '_');
            sections.push({ title: title, content: content, anchor: anchor });
          });
          return sections.filter(section => section.content);
        }
        return null;
      }

      public replaceShortCodes(text: string): string {
        if (TextShortCodes.length === 0) {
          return text;
        }
        TextShortCodes.forEach(sc => {
          text = text.split(sc.find).join(sc.replace);
        });
        return text;
      }
}
