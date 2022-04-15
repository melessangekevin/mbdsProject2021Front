import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from '../assignment.model';
declare const google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
 // Champs du formulaire
 nomAssignment = "";
 dateDeRenduAssignment!:Date;

  constructor(private assignmentsService:AssignmentsService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.nomAssignment);
    console.log(this.dateDeRenduAssignment);

    let newAssignment = new Assignment();
    newAssignment.id = Math.round(Math.random()*1000000); // id entier entre 0 et 1M
    newAssignment.nom = this.nomAssignment;
    newAssignment.dateDeRendu = this.dateDeRenduAssignment;
    newAssignment.rendu = false;

    this.assignmentsService.addAssignment(newAssignment)
    .subscribe(reponse => {
      console.log(reponse.message);

      // on doit naviguer vers l'URL qui affiche la liste ("" ou "/home")
      // on doit naviguer par programme
      // on retourne à la page d'accueil
      this.router.navigate(["/home"]);
    })
  }

}
