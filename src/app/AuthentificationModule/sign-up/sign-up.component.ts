import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  errorMessage!: string;
  successMessage!: string;
  errorInputMessage!: string;
  registerForm!: FormGroup;
  user:any = []
  formBuilder: any;
  submitted = false;

 constructor(private userService : UserService,private router : Router,formBuilder: FormBuilder) { 
  this.mainForm();
 }

  ngOnInit() {


  }
  mainForm() {

    this.registerForm=new FormGroup({
      username:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required, Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.email]),

    })
  }
  get myForm(){
    return this.registerForm.controls;
  }

  onRegister() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.userService.addUser(this.registerForm.value).subscribe(
        data => {
          this.registerForm.reset();
          this.user=data
          this.successMessage = this.user.message
          
          
          setTimeout(() => {
           this.successMessage = "";
  
           // this.router.navigate(['login']);
          }, 6000);
        },
        err => {
  
          if (err.error.message) {
            this.errorMessage = err.error.message;
            setTimeout(() => {
              this.errorMessage = "";
     
              
             }, 8000);
          }
        }
      )
  }else{
    this.errorInputMessage = "Veuillez saisir tous les champs valides"
    setTimeout(() => {
      this.errorInputMessage = "";

      
     }, 4000);
  }

 

}
}
