import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  IndianStates=[
    {
      id:1,
      name:'Telangana'
    },
    {
      id:2,
      name:'Andhra'
    },
    {
      id:3,
      name:'Maharashtra'
    },
    {
      id:4,
      name:'Bihar'
    }
  ]

  stdForm:FormGroup=new FormGroup({
    firstname:new FormControl("Radha",[Validators.required,Validators.maxLength(6)]),
    lastname:new FormControl("",[Validators.maxLength(3)]),
    username:new FormControl(""),
    city:new FormControl(""),
    state:new FormControl(""),
    zipCode:new FormControl(""),
    IsAgree:new FormControl(false), 
  })

  onSubmit(){
    console.log(this.stdForm);
  }
}
