import { Component, OnInit } from '@angular/core';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  private content: string;
  private loading: boolean;

  constructor(
    private data: AboutService,
  ) {}

  ngOnInit() {
    this.content = '';
    this.getContent();
    this.loading = true;
  }
  private getContent(): void {
    this.data.getAboutContent().subscribe(
      (response) => {
        this.content = response; // we don't need mapper in this case
        this.loading = false;
      });
  } 
}

