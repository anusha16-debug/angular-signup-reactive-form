import { FormGroup } from '@angular/forms';

// class export passwordChecker extends FormGroup(){}
export function passwordChecker(controlName: string , compareControlName: string) {

   return (formGroup: FormGroup) => {
      const password =  formGroup.controls[controlName];
      const confPassword = formGroup.controls[compareControlName];
      if(password !== confPassword){
        confPassword.setErrors({musMatch: true})
      } else{
          confPassword.setErrors(null)
      }
   }
}