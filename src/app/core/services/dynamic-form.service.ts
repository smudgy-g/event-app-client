import { Injectable } from '@angular/core';
import { QuestionBase } from '../classes/question-base';
import { of } from 'rxjs';
import { TextboxQuestion } from '../classes/question-textbox';
import { DateQuestion } from '../classes/question-date';
import { CheckboxQuestion } from '../classes/question-checkbox';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  
  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DateQuestion({
        key: 'dateOfBirth',
        label: 'Date of Birth',
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 3
      }),

      new CheckboxQuestion({
        key: 'allergies',
        label: 'Allergies',
        required: true,
        order: 5
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
