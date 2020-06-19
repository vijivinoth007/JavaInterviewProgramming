import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10programmesComponent } from './top10programmes.component';

describe('Top10programmesComponent', () => {
  let component: Top10programmesComponent;
  let fixture: ComponentFixture<Top10programmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10programmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10programmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
