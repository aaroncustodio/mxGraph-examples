import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlLabelsComponent } from './html-labels.component';

describe('HtmlLabelsComponent', () => {
  let component: HtmlLabelsComponent;
  let fixture: ComponentFixture<HtmlLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
