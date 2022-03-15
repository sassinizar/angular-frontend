import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {


  intervention: Intervention = new Intervention();

  intervGroup !: FormGroup;

  direction = ["الإدارة العامة لشرطة الحدود والأجانب",
  "الإدارة العامة للمصالح الفنية"
  ,"الإدارة العامة للأمن العمومي"
  ,"الإدارة العامة للمصالح المختصة",
  "الإدارة العامة لتكوين"];


 constructor(private interventionService: InterventionService, 
   private router: Router, private formBuilder: FormBuilder ) { }

 ngOnInit(): void {
   this.intervGroup = this.formBuilder.group({
     intervName : ['',Validators.required],
     direction : ['',Validators.required],
     dateInterv: ['',Validators.required],
     titulaire :['',Validators.required],
     remarque: ['',Validators.required],
   })
 }
 
 saveIntervention(){
   this.interventionService.createIntervention(this.intervention).subscribe( data =>{
     this.goToInterventionList();
   },
   error => console.log(error));
 }

 goToInterventionList(){
   this.router.navigate(['/interventions']);
 }

 onSubmit(){
   this.saveIntervention()
 }



}
