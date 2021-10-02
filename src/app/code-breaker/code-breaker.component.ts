import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeBreakerService } from '../providers/services/code-breaker.service';

@Component({
  selector: 'app-code-breaker',
  templateUrl: './code-breaker.component.html',
  styleUrls: ['./code-breaker.component.scss']
})
export class CodeBreakerComponent implements OnInit {

  form: FormGroup;
  response: string = null;

  constructor(private fb: FormBuilder, private codebreakerService: CodeBreakerService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.fb.group({
      number: [null, Validators.required]
    });
  }

  verifyNumber() {
    if(this.number.valid){
      this.codebreakerService.verifyNumber(this.number.value).subscribe(({result}) => {
        this.response = result;
      });
    }
    console.log(this.number.value);
  }

  get number(): AbstractControl {
    return this.form.get('number');
  }

}
