import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserCreateComponent } from './api-user-create.component';

describe('ApiUserCreateComponent', () => {
  let component: ApiUserCreateComponent;
  let fixture: ComponentFixture<ApiUserCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
