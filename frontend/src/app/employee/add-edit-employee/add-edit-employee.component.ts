import { Component, Input } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent {
  constructor(private service: ApiserviceService) { }
  @Input() emp: any;
  EmployeeId = "";
  EmployeeName = "";
  Department = "";
  DateOfJoining = "";
  PhotoFileName = "";
  PhotoFilePath = "";
  DepartmentList: any = [];

  ngOnInit(): void {
    this.loadEmployeeList();
  }

  loadEmployeeList() {
    this.service.getDepartmentList().subscribe((data: any) => {
      this.DepartmentList = data;
      this.EmployeeId = this.emp.employeeID;
      this.EmployeeName = this.emp.employeeName;
      this.Department = this.emp.department;
      this.PhotoFileName = this.emp.photoFileName;
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;

      const inputDate = new Date(this.emp.doj);

      const year = inputDate.getFullYear();
      const month = String(inputDate.getMonth() + 1).padStart(2, '0');
      const day = String(inputDate.getDate()).padStart(2, '0');

      this.DateOfJoining = `${year}-${month}-${day}`;
      console.log(this.DateOfJoining)
    })
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Doj: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    }

    this.service.addEmployee(val).subscribe(res => {
      console.log(res)
    })
  }

  updateEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      Doj: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName
    };

    this.service.updateEmployee(val).subscribe(res => {
      console.log(res)
    });
  }

  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    })
  }
}
