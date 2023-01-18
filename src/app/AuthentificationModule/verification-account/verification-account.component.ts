import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verification-account',
  templateUrl: './verification-account.component.html',
  styleUrls: ['./verification-account.component.css']
})
export class VerificationAccountComponent implements OnInit {


  verificationCode: null;
  CurrentState: any;
  constructor(
    private authService: UserService,
    private route: ActivatedRoute,
     ) {

    this.CurrentState = 'Wait';
    this.route.params.subscribe(params => {
      this.verificationCode = params.verificationCode;
      console.log(this.verificationCode);
      this.VerifyToken();
    });
  }


  ngOnInit() {

  }

  VerifyToken() {
    this.authService.ValidVerification({ verificationCode: this.verificationCode }).subscribe(
      data => {
        this.CurrentState = 'Verified';
      },
      err => {
        this.CurrentState = 'NotVerified';
      }
    );
  }




}