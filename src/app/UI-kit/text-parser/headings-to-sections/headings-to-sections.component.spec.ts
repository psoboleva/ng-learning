import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingsToSectionsComponent } from './headings-to-sections.component';

describe('HeadingsToSectionsComponent', () => {
  let component: HeadingsToSectionsComponent;
  let fixture: ComponentFixture<HeadingsToSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingsToSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingsToSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
