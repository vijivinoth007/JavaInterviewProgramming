import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingandsearchingComponent } from './sortingandsearching.component';

describe('SortingandsearchingComponent', () => {
  let component: SortingandsearchingComponent;
  let fixture: ComponentFixture<SortingandsearchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingandsearchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingandsearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
