import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutauthourComponent } from './aboutauthour.component';

describe('AboutauthourComponent', () => {
  let component: AboutauthourComponent;
  let fixture: ComponentFixture<AboutauthourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutauthourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutauthourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
