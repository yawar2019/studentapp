import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IEmployee
{
  EmpId:0,
  EmpName:'',
  EmpSalary:0,
}

@Injectable({
  providedIn: 'root'
})

export class GetEmployeesServiceService {

 
  url="http://localhost:51015/";
  Employee:IEmployee={
    EmpId: 0,
    EmpName: '',
    EmpSalary: 0
  };
  AllEmployees:IEmployee[]=[];


  constructor(private http:HttpClient) { }

getEmployees():Observable<any>
{
return this.http.get(this.url+'api/tbl_Employees');
}

SaveEmployee(Employee:IEmployee):Observable<any>
{
return this.http.post(this.url+'api/tbl_Employees',Employee);
}

DeleteEmployee(Id:any):Observable<any>
{
return this.http.delete(this.url+'api/tbl_Employees/'+Id);
}
}
