import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiUrl = 'https://localhost:7296/api/';
  readonly photoUrl = 'https://localhost:7296/Photos/';

  constructor(private http: HttpClient) { }

  //Department
  getDepartmentList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Department/GetDepartment');
  }

  addDepartment(dept: any): Observable<any> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'})}
    return this.http.post<any[]>(this.apiUrl + 'Department/AddDepartment', dept, httpOptions)
  }

  updateDepartment(dept: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Department/UpdateDepartment/', dept, httpOptions);
  }

  deleteDepartment(deptId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'Department/DeleteDepartment/' + deptId, httpOptions);
  }

  // Employee
  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Employee/GetEmployee');
  }

  addEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<any>(this.apiUrl + 'Employee/AddEmployee', emp, httpOptions);
  }

  updateEmployee(emp: any): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<any>(this.apiUrl + 'Employee/UpdateEmployee/', emp, httpOptions);
  }

  deleteEmployee(empId: number): Observable<number> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.delete<number>(this.apiUrl + 'Employee/DeleteEmployee/' + empId, httpOptions);
  }

  uploadPhoto(photo: any) {
    return this.http.post(this.apiUrl + 'Employee/Savefile', photo);
  }

  // getAllDepartmentNames(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl + 'Employee/GetAllDepartmentNames');
  // }
}
