import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  direction!: string;
  intervenant!: string;
  results!: any;
  constructor(private route: ActivatedRoute, private interventionService: InterventionService) { }

  ngOnInit(): void {
    this.intervenant = this.route.snapshot.params['intervenant'];

    this.results = new Intervention();
    this.interventionService.getInterventionByIntervenant(this.intervenant).subscribe(data => {
      this.results = data;
    })
  }

}
