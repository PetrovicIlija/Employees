import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConfirmDialogTemplateComponent } from './confirm-dialog-template.component';

describe('ConfirmDialogTemplateComponent', () => {
  let component: ConfirmDialogTemplateComponent;
  let fixture: ComponentFixture<ConfirmDialogTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
