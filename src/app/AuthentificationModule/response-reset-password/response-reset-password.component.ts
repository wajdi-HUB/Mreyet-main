import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-response-reset-password',
  templateUrl: './response-reset-password.component.html',
  styleUrls: ['./response-reset-password.component.css']
})
export class ResponseResetPasswordComponent implements OnInit {
  ResponseResetForm!: FormGroup;
  errorMessage!: string;
  successMessage! : string;
  errorInputMessage!: string;
  submitted = false;
  resetPasswordToken: null;
  CurrentState: any;
  IsResetFormValid = true;
  constructor(
    private authService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder ) {

    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.resetPasswordToken = params.token;
      console.log(this.resetPasswordToken);
      this.VerifyToken();
    });
  }


  ngOnInit() {

    this.Init();
  }

  VerifyToken() {
    this.authService.ValidPasswordToken({ resetPasswordToken: this.resetPasswordToken }).subscribe(
      data => {
        this.CurrentState = 'Verified';
      },
      err => {
        this.CurrentState = 'NotVerified';
      }
    );
  }

  Init() {
    this.ResponseResetForm = this.fb.group(
      {
        resetPasswordToken: [this.resetPasswordToken],
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  Validate(passwordFormGroup: FormGroup) {
    const new_password = passwordFormGroup.controls.newPassword.value;
    const confirm_password = passwordFormGroup.controls.confirmPassword.value;

    if (confirm_password.length <= 0) {
      return null;
    }

    if (confirm_password !== new_password) {
      return {
        doesNotMatch: true
      };
    }

    return null;
  }

  get myForm(){
    return this.ResponseResetForm.controls;
  }

  
  ResetPassword() {
    this.submitted = true;
    if (this.ResponseResetForm.valid) {
      this.IsResetFormValid = true;
      this.authService.newPassword(this.ResponseResetForm.value).subscribe(
        data => {
       //   this.ResponseResetForm.reset();
        this.successMessage = "Votre mot de passe a été modifié avec succès";
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
    } else{
      this.errorInputMessage = "Veuillez saisir tous les champs "
      setTimeout(() => {
        this.errorInputMessage = "";
  
        
       }, 4000);
    }
  }}