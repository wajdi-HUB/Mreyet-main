import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  loginUserData = {}
  loginForm!: FormGroup;
  errorMessage!: string;
  successMessage!: string;
hide: boolean = false;
user:any = []

  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      username:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])

    })
   
  }
     onLogin() {

      this.userService.LoginUser(this.loginForm.value).subscribe(
        res=>{
         this.user=res

           // console.log(this.user)
            this.successMessage = this.user.message

            //alert(this.user)
           // console.log(this.user.data.token)
           this.userService.saveToken(this.user.data.token);
          this.userService.saveUser(this.user);
           console.log(this.userService.getUser())
         //  this.router.navigate(['/profile']);
         //  window.location.reload();
         this.router.navigate(['profile'])
         .then(() => {
          window.location.reload();
        });
        
        },
        err=>{console.log(err),
          this.errorMessage = err.error.message;

        
        }
      )
 
}

}
