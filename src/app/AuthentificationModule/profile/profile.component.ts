import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   username!: string;

  constructor( private userService: UserService, private router: Router) { }

  ngOnInit(): void {
            
  this.userService.getProfile().subscribe(user=>{

      console.log(user)
      this.username = user.username;
      console.log(this.username)

  },
        err => {

          if (err.error.message) {
          }
        }
      );
       
  }





}
