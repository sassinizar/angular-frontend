import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-update-intervention',
  templateUrl: './update-intervention.component.html',
  styleUrls: ['./update-intervention.component.css']
})

export class UpdateInterventionComponent implements OnInit {

  id: number =4;
  intervention: Intervention = new Intervention();
 
  constructor(private interventionService: InterventionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.interventionService.getInterventionById(this.id).subscribe(data => {
      this.intervention = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.interventionService.updateIntervention(this.id, this.intervention).subscribe( data =>{
      this.goToInterventionList();
    }
    , error => console.log(error));
  }

  goToInterventionList(){
    this.router.navigate(['/interventions']);
  }

}
