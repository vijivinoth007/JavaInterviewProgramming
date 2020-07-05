import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicproblemsComponent } from './dynamicproblems.component';

describe('DynamicproblemsComponent', () => {
  let component: DynamicproblemsComponent;
  let fixture: ComponentFixture<DynamicproblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicproblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicproblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
