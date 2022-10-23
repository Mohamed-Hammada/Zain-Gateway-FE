import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserMainViewComponent } from './api-user-main-view.component';

describe('ApiUserMainViewComponent', () => {
  let component: ApiUserMainViewComponent;
  let fixture: ComponentFixture<ApiUserMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
