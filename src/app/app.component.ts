import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './pages/shared/assignments.service';
import { AuthService } from './pages/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Première application angular sur heroku';

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

  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("TOUS LES AJOUTS ONT ETE REALISES");
      // on peut alors afficher la liste
      this.router.navigate(["/home"]);
    })
  }
}
