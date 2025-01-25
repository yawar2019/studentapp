import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GetEmployeesServiceService, IEmployee } from '../get-employees-service.service';

@Component({
  selector: 'app-employee-registration',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {

  @Input() EmployeeData:IEmployee={
    EmpId: 0,
    EmpName: '',
    EmpSalary: 0
    
  };
  
  constructor(public service:GetEmployeesServiceService)
  {
 
  }
  
  EmployeeAdd(Employee:IEmployee)
  {
    
  this.service.SaveEmployee(Employee).subscribe(data=>{
  
  this.service.getEmployees().subscribe(data=>{
    this.service.AllEmployees=data;
     
    })
 
 this.EmployeeData.EmpId=0;
 this.EmployeeData.EmpName='';
 this.EmployeeData.EmpSalary=0;
  })

}
   
}
