import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-registration-form',
  templateUrl: './new-registration-form.component.html',
  styleUrls: ['./new-registration-form.component.css']
})
export class NewRegistrationFormComponent {
  registrationForm: FormGroup;
  inputTypes = [
    { value: 'text', viewValue: 'Text' },
    { value: 'checkbox', viewValue: 'Checkbox' },
    { value: 'date', viewValue: 'Date' },
  ];

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      inputGroup: this.fb.array([this.createInputFormGroup()])
    })
  }

  createInputFormGroup(): FormGroup {
    return new FormGroup({
      'inputName': new FormControl('', Validators.required),
      'inputType': new FormControl('', Validators.required)
    })
  }

  get inputGroup() {
    return this.registrationForm.get('inputGroup') as FormArray;
  }

  addInputFormGroup() {
    const newInputFormGroup = this.createInputFormGroup();
    this.registrationForm.addControl('inputGroup', newInputFormGroup);
    this.inputGroup.push(newInputFormGroup);
  }

  removeOrClearEmail(i: number) {
    if (this.inputGroup.length > 1) {
      this.inputGroup.removeAt(i)
    } else {
      this.inputGroup.reset()
    }
  }

  submitForm() {
    console.log(this.registrationForm.value);
  }
}
