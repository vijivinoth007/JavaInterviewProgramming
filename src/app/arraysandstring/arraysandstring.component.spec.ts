import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysandstringComponent } from './arraysandstring.component';

describe('ArraysandstringComponent', () => {
  let component: ArraysandstringComponent;
  let fixture: ComponentFixture<ArraysandstringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraysandstringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraysandstringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
