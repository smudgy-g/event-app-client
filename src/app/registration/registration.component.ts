import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '../core/services/dynamic-form.service';
import { Observable } from 'rxjs';
import { QuestionBase } from '../core/classes/question-base';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [DynamicFormService]
})
export class RegistrationComponent implements OnInit {
  questions$: Observable<QuestionBase<any>[]>;
  id: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, service: DynamicFormService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
    // add error handling
    this.id = +this.activatedRoute.snapshot.params['id'];
  }
}
