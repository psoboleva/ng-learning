import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingsToSidebarComponent } from './headings-to-sidebar.component';

describe('HeadingsToSidebarComponent', () => {
  let component: HeadingsToSidebarComponent;
  let fixture: ComponentFixture<HeadingsToSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingsToSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingsToSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
