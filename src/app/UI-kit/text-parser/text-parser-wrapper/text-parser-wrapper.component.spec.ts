import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextParserWrapperComponent } from './text-parser-wrapper.component';

describe('TextParserWrapperComponent', () => {
  let component: TextParserWrapperComponent;
  let fixture: ComponentFixture<TextParserWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextParserWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextParserWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
