import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private authService:AuthService,
    private router:Router,
    private assignmentsService:AssignmentsService) {}

  login() {
    if(!this.authService.loggedIn) {
      this.authService.logIn();
    } else {
      this.authService.logOut();
      this.router.navigate(["/home"]);
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
