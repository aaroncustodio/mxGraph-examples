import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStylingComponent } from './basic-styling.component';

describe('BasicStylingComponent', () => {
  let component: BasicStylingComponent;
  let fixture: ComponentFixture<BasicStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
