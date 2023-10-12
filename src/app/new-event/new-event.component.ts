import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent {
  eventDetailsForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    location: ['', [Validators.required]],
    description: ['', [Validators.required]],
    start: ['', [Validators.required]],
    end: ['', [Validators.required]],
  })

  constructor(private formBuilder: FormBuilder) {}

  addEvent() {
    console.log(this.eventDetailsForm.value);
  }
}
