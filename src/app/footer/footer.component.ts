import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isLoggedIn = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.userService.getToken();

    if (this.isLoggedIn) {
      const user = this.userService.getUser();

    }
  }

  logout(): void {
    this.userService.signOut();
    window.location.reload();
  }
}