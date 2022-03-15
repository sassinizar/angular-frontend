import { Component, OnInit } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { Intervention } from '../intervention';
import { InterventionListComponent } from '../intervention-list/intervention-list.component';
import { InterventionService } from '../intervention.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-intervention',
  templateUrl: './create-intervention.component.html',
  styleUrls: ['./create-intervention.component.css']
})
export class CreateInterventionComponent implements OnInit {

  intervention: Intervention = new Intervention();   

  constructor(private interventionService: InterventionService, 
    private router: Router) { }

  ngOnInit(): void {
  }
  
  saveIntervention(){
    this.interventionService.createIntervention(this.intervention).subscribe( data =>{
      console.log(data);
      this.goToInterventionList();
    },
    error => console.log(error));
  }

  goToInterventionList(){
    this.router.navigate(['/interventions']);
  }

  onSubmit(){
    console.log(this.intervention)
    this.saveIntervention()
  }
}
