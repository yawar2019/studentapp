import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-template-form2',
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './simple-template-form2.component.html',
  styleUrl: './simple-template-form2.component.css'
})
export class SimpleTemplateForm2Component {
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

studentObj={
  firstname:"",
  lastname:"",
  username:"",
  city:"",
  state:"",
  zipCode:"",
  IsAgree:false
}
onSubmit()
{
  console.log(this.studentObj)
}

}
