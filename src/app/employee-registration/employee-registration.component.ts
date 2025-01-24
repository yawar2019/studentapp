import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  test()
  {
   console.log(this.EmployeeData); 
  }
  EmployeeAdd(Employee:IEmployee)
  {
  this.service.SaveEmployee(Employee).subscribe(data=>{
 if(data.EmpId>0){
  this.service.getEmployees();
 }
  })
  
  
  }
}
