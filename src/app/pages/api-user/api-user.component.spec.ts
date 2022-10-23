import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserComponent } from './api-user.component';

describe('ApiUserComponent', () => {
  let component: ApiUserComponent;
  let fixture: ComponentFixture<ApiUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
