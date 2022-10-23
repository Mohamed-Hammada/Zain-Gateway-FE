import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserLimiterCreateComponent } from './api-user-limiter-create.component';

describe('ApiUserLimiterCreateComponent', () => {
  let component: ApiUserLimiterCreateComponent;
  let fixture: ComponentFixture<ApiUserLimiterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserLimiterCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserLimiterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
