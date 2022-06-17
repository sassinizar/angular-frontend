import { Component, OnInit } from '@angular/core';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateInterventionComponent } from '../create-intervention/create-intervention.component';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-intervention-list',
  templateUrl: './intervention-list.component.html',
  styleUrls: ['./intervention-list.component.css']
})
export class InterventionListComponent implements OnInit {

  interventions: any;

  constructor(private interventionService: InterventionService,
    private router: Router, private dialog: MatDialog) { }

    openDialog(){
      this.dialog.open(DialogComponent, {
        width : "45%",
      });
    }
  
    totalLength: any;
    page: number = 1;
  
  ngOnInit(): void {
    this.getInterventions();
  }

  private getInterventions(){
    this.interventionService.getInterventionsList().subscribe(data => {
      console.log(data);
      this.interventions = data ;
      this.totalLength = data.length;     
    }
      )
  }

  public searchIntervention(key: string): void {
    console.log(key);
    const result: Intervention[] = [];
    for (const intervention of this.interventions) {
      if (intervention.intervenant.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || intervention.faveur.toLowerCase().indexOf(key.toLowerCase()) !== -1
     /* || intervention.date.toLowerCase().indexOf(key.toLowerCase()) !== -1*/ ) {
        result.push(intervention);
        const a = result.length;
      }
    }
    this.interventions = result;
    if (result.length === 0 || !key) {
      this.getInterventions();
    }
  }

  
  updateIntervention(id: number){
    this.router.navigate(['update-intervention', id])
  }

  deleteIntervention(id: number){
    this.interventionService.deleteIntervention(id).subscribe(data => {
      console.log(data);
      this.getInterventions();
    })
  }
/*
  interventionDetails(id: number){
    this.router.navigate(['intervention-details', id])
    console.log("c'est l intervenant"+id);
  }
*/
interventionDetails(intervenant: string){
  this.router.navigate(['test', intervenant])
}
}
