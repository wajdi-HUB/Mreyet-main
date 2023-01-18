import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerificationAccountComponent } from './verification-account/verification-account.component';


const routes: Routes = [
  { path: 'login' , component: SignInComponent},
  { path: 'signup' , component: SignUpComponent},
  { path: 'request-reset-password',component: ResetPasswordComponent,},
  { path: 'response-reset-password/:token',component: ResponseResetPasswordComponent},
  { path: 'verify/:verificationCode', component: VerificationAccountComponent},
  { path: 'profile', component: ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
