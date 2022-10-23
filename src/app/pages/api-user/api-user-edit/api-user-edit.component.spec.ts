import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUserEditComponent } from './api-user-edit.component';

describe('ApiUserEditComponent', () => {
  let component: ApiUserEditComponent;
  let fixture: ComponentFixture<ApiUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUserEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
