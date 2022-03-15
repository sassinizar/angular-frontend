import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-intervention-details',
  templateUrl: './intervention-details.component.html',
  styleUrls: ['./intervention-details.component.css']
})
export class InterventionDetailsComponent implements OnInit {

  id!: number;
  intervention!: Intervention;
  constructor(private route: ActivatedRoute, private interventionService: InterventionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.intervention = new Intervention();
    this.interventionService.getInterventionById(this.id).subscribe(data => {
      this.intervention = data;
    })
  }

}
