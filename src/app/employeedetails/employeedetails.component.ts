import { Component, OnInit } from '@angular/core';
import { GetEmployeesServiceService, IEmployee } from '../get-employees-service.service';
import { CommonModule } from '@angular/common';
import { EmployeeRegistrationComponent } from '../employee-registration/employee-registration.component';




@Component({
  selector: 'app-employeedetails',
  imports: [CommonModule,EmployeeRegistrationComponent],
  providers:[GetEmployeesServiceService],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent implements OnInit {
constructor(public service:GetEmployeesServiceService)
{

}
   ngOnInit(): void {
    this.service.getEmployees().subscribe(data=>{
    this.service.AllEmployees=data;
     
    })
    

  }


  EmployeeEdit(id:any)
    {
      this.service.Employee=(this.service.AllEmployees.filter(x => x.EmpId == id)) as unknown as IEmployee;
     console.log(this.service.Employee);
    }

    EmployeeDelete(id:any)
    {
      
      this.service.DeleteEmployee(id).subscribe(data=>{
        
        alert('Record Deleted Successfully');
        })
        
    }


  

}
