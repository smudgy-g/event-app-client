import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegistrationFormComponent } from './new-registration-form.component';

describe('NewRegistrationFormComponent', () => {
  let component: NewRegistrationFormComponent;
  let fixture: ComponentFixture<NewRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(NewRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
