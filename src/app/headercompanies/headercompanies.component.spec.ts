import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercompaniesComponent } from './headercompanies.component';

describe('HeadercompaniesComponent', () => {
  let component: HeadercompaniesComponent;
  let fixture: ComponentFixture<HeadercompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadercompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
