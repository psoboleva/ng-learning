import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private content: string;
  private loading: boolean;

  constructor(
    private data: HomeService,
  ) {}

  ngOnInit() {
    this.content = '';
    this.getContent();
    this.loading = true;
  }
  private getContent(): void {
    this.data.getHomeContent().subscribe(
      (response) => {
        this.content = response; // we don't need mapper in this case
        this.loading = false;
      });
  } 
}
