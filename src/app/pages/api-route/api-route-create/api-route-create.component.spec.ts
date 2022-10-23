import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRouteCreateComponent } from './api-route-create.component';

describe('ApiRouteCreateComponent', () => {
  let component: ApiRouteCreateComponent;
  let fixture: ComponentFixture<ApiRouteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRouteCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiRouteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
