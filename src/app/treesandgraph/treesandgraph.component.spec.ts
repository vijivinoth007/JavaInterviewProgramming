import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreesandgraphComponent } from './treesandgraph.component';

describe('TreesandgraphComponent', () => {
  let component: TreesandgraphComponent;
  let fixture: ComponentFixture<TreesandgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreesandgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreesandgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
