import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  imports: [CommonModule,ReactiveFormsModule,JsonPipe],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.css'
})
export class FormbuilderComponent implements OnInit{
  stdForm:FormGroup;
  constructor(private fbuilder:FormBuilder)
  {
    this.stdForm=this.fbuilder
    .group(
      {
      firstname:['Radha',[Validators.required,Validators.minLength(2)]],
      lastname:'',
      username:'',
      city:'',
      state:'',
      zipCode:'',
      IsAgree:false, 
    }
  )
  }

  ngOnInit(): void {

   
  }
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

 

  onSubmit(){
    console.log(this.stdForm);
  }
}
