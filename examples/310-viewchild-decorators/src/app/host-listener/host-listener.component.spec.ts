import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerComponent } from './host-listener.component';

describe('HostListenerComponent', () => {
  let component: HostListenerComponent;
  let fixture: ComponentFixture<HostListenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostListenerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
