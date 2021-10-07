import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropTargetsComponent } from './drop-targets.component';

describe('ExerciseComponent', () => {
  let component: DropTargetsComponent;
  let fixture: ComponentFixture<DropTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
