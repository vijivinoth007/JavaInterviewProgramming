import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructureimplComponent } from './datastructureimpl.component';

describe('DatastructureimplComponent', () => {
  let component: DatastructureimplComponent;
  let fixture: ComponentFixture<DatastructureimplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatastructureimplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatastructureimplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
