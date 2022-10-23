import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserLimiterComponent } from './api-user-limiter.component';

describe('ApiUserLimiterComponent', () => {
  let component: ApiUserLimiterComponent;
  let fixture: ComponentFixture<ApiUserLimiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserLimiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserLimiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
