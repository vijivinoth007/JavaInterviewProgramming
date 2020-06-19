import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproblemComponent } from './updateproblem.component';

describe('UpdateproblemComponent', () => {
  let component: UpdateproblemComponent;
  let fixture: ComponentFixture<UpdateproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateproblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
