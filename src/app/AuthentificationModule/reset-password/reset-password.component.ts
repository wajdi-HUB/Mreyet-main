import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

 
  RequestResetForm!: FormGroup;
  errorMessage!: string;
  successMessage!: string;
  errorInputMessage!: string;
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
   ) {

  }


  ngOnInit() {

    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  get myForm(){
    return this.RequestResetForm.controls;
  }


  RequestResetUser() {
    this.submitted = true;
    if (this.RequestResetForm.valid) {
      this.userService.requestReset(this.RequestResetForm.value).subscribe(
        data => {
          this.RequestResetForm.reset();
          this.successMessage = "Si cette adresse e-mail est déja enregistrée , vous recevrez un lien pour réinitialiser votre mot de passe";
          setTimeout(() => {
            this.successMessage = "";

           // this.router.navigate(['login']);
          }, 6000);
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    }  else{
      this.errorInputMessage = "Veuillez saisir tous les champs valides"
      setTimeout(() => {
        this.errorInputMessage = "";
  
        
       }, 4000);
    }
}}