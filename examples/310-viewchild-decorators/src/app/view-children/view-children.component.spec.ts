import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenComponent } from './view-children.component';

describe('ViewChildrenComponent', () => {
  let component: ViewChildrenComponent;
  let fixture: ComponentFixture<ViewChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
