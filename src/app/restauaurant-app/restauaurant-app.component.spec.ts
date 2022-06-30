import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauaurantAppComponent } from './restauaurant-app.component';

describe('RestauaurantAppComponent', () => {
  let component: RestauaurantAppComponent;
  let fixture: ComponentFixture<RestauaurantAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauaurantAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauaurantAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
