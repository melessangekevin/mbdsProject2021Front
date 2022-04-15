import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from '../shared/assignments.service';
import { AuthService } from '../shared/auth.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  titre = 'Application de gestion des assignments !';
  assignments: Assignment[] = [];

  constructor(private assignmentsService: AssignmentsService,
    private router:Router,) {
    //console.log("dans le constructeur")
  }

    // appelé avant l'affichage
    ngOnInit(): void {
      //console.log("dans le ngInit")
      this.assignmentsService.getAssignments().subscribe((assignments) => {
      this.assignments = assignments;
        //console.log("Données arrivées");
      });

      //console.log("assignmentsService.getAssignments() appelé...");
    }

    getColor(index: number) {
      return index % 2 ? 'red' : 'green';
    }

  peuplerBD() {
    this.assignmentsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      console.log("TOUS LES AJOUTS ONT ETE REALISES");
      // on peut alors afficher la liste
      this.router.navigate(["/tables"]);
    })
  }

}
