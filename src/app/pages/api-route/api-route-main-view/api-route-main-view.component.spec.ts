import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRouteMainViewComponent } from './api-route-main-view.component';

describe('ApiRouteMainViewComponent', () => {
  let component: ApiRouteMainViewComponent;
  let fixture: ComponentFixture<ApiRouteMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRouteMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRouteMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
