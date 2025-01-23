import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IEmployee
{
  EmpId:0,
  EmpName:'',
  EmpSalary:'',
}

@Injectable({
  providedIn: 'root'
})

export class GetEmployeesServiceService {

 
  url="http://localhost:51015/";
  AllEmployees:IEmployee[]=[];
  constructor(private http:HttpClient) { }

getEmployees():Observable<any>
{
return this.http.get(this.url+'api/tbl_Employees');
}

}
