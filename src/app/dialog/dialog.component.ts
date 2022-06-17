import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Intervention } from '../intervention';
import { InterventionService } from '../intervention.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

   dateInterv = new Date();

  intervention: Intervention = new Intervention();

  intervGroup !: FormGroup;
  

  direction = ["الإدارة العامة لشرطة الحدود والأجانب",
  "الإدارة العامة للمصالح الفنية"
  ,"الإدارة العامة للأمن العمومي"
  ,"الإدارة العامة للمصالح المختصة",
  "الإدارة العامة لتكوين"];


 constructor(private interventionService: InterventionService, 
   private router: Router, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<DialogComponent> ) { }

 ngOnInit(): void {
   this.intervGroup = this.formBuilder.group({
     intervenant : ['',Validators.required],
     direction : ['',Validators.required],
     dateInterv: ['',Validators.required],
     faveur :['',Validators.required],
     remarque: ['',Validators.required],
   })
  
 }


 saveIntervention(){   
   this.interventionService.createIntervention(this.intervGroup.value).subscribe({
          next:(res)=>{
              alert("تمت إضافة تداخل");
              this.intervGroup.reset();
              this.dialogRef.close('save');
          
               
               
              }
          },)
  }   

 goToInterventionList(){
   this.router.navigate(['/interventions']);
 }

 onSubmit(){
   console.log(this.intervention)
   this.saveIntervention()
 }

}
