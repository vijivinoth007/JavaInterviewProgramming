import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteproblemComponent } from './deleteproblem.component';

describe('DeleteproblemComponent', () => {
  let component: DeleteproblemComponent;
  let fixture: ComponentFixture<DeleteproblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteproblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
