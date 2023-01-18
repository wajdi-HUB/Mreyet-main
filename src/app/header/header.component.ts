import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  user:any;
  role!: string;
  IsClient:boolean=false;
  IsAdminMreyet:boolean=false;
  IsAdminBoutique:boolean=false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.userService.getToken();

    if (this.isLoggedIn) {
      this.userService.getProfile().subscribe(user=>{

        console.log(user)
        this.role = user.role;
        console.log(this.role)
        if(this.role =="client")
        {
          this.IsClient=true;
          this.IsAdminMreyet=false;
          this.IsAdminBoutique=false;

        }
        else
        if(this.role =="adminmreyet")
        {
          this.IsClient=false;
          this.IsAdminMreyet=true;
          this.IsAdminBoutique=false;
        }
  
    },
          err => {
  
            if (err.error.message) {
            }
          }
        );
    }
  }

  logout(): void {
    this.userService.signOut();
    window.location.reload();
  }
}