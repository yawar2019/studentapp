import { Component, OnInit } from '@angular/core';
import { GetEmployeesServiceService } from '../get-employees-service.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-employeedetails',
  imports: [CommonModule],
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
    console.log(this.service.AllEmployees);

    })
  }

}
