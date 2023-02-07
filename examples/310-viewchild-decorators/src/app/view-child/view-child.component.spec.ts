import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildComponent } from './view-child.component';

describe('ViewChildComponent', () => {
  let component: ViewChildComponent;
  let fixture: ComponentFixture<ViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
