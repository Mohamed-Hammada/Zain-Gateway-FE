import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMatConfirmDialogComponent } from './app-mat-confirm-dialog.component';

describe('AppMatConfirmDialogComponent', () => {
  let component: AppMatConfirmDialogComponent;
  let fixture: ComponentFixture<AppMatConfirmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMatConfirmDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMatConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
