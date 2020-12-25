import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { passwordChecker } from '../custom-validators/password-checker';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false , Validators.requiredTrue]
    }, {
      validators : passwordChecker('password', 'confirmPassword')
    })
  }

   get helperFormControl(){
    return this.registerForm.controls;
  }

  onResetForm(){
    this.submitted = false;
    this.registerForm.reset();
  }

  onSubmitForm(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    console.table(this.registerForm.value)
    console.table(this.registerForm)

    alert('Success SignUp\n' +this.registerForm.value)
  }

}
