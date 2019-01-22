import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';
import { City } from './city.model';

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    // mock data voor deze component
    component.cities = [
      new City(1, 'Venlo', 'LB'),
      new City(2, 'Groningen', 'GR')
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cities should have a length of 2', () => {
    expect(component.cities.length).toEqual(2);
  });

  it('should add a city', () => {
    component.addCity('Venlo');
    expect(component.cities.length).toEqual(3);
  });

  it('should delete a city', () => {
    component.deleteCity(component.cities[0]);
    expect(component.cities.length).toEqual(1);
  });

  // Example of a Spy. "Is the correct method called, when a specific button is clicked?"
  it('should call the deleteCity method only when delete button is clicked', async(() => {
    spyOn(component, 'deleteCity');
    const button = fixture.debugElement.nativeElement.querySelector(
      '#btnDelete'
    );
    button.click();

    fixture.whenStable().then(() => {
      expect(component.deleteCity).toHaveBeenCalled();
    });
  }));
});
