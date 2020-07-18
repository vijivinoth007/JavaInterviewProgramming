import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingalgoComponent } from './sortingalgo.component';

describe('SortingalgoComponent', () => {
  let component: SortingalgoComponent;
  let fixture: ComponentFixture<SortingalgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingalgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
