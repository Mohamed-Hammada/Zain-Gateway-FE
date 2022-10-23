import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserLimiterMainViewComponent } from './api-user-limiter-main-view.component';

describe('ApiUserLimiterMainViewComponent', () => {
  let component: ApiUserLimiterMainViewComponent;
  let fixture: ComponentFixture<ApiUserLimiterMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserLimiterMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserLimiterMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
