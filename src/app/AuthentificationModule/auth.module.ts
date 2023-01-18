import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { VerificationAccountComponent } from './verification-account/verification-account.component';
import { ResponseResetPasswordComponent } from './response-reset-password/response-reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../services/user.service';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    VerificationAccountComponent,
    ResponseResetPasswordComponent,
    SignUpComponent,
    SignInComponent,
    ResetPasswordComponent,
    ProfileComponent,
   
  ],

  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatIconModule,













  ],
  providers: [UserService
  ],
  exports: [
    RouterModule,
    ]
})
export class AuthModule { }
