import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent {
  constructor(private service: ApiserviceService) {}

  EmployeeList: any = [];
  ModalTitle = "";
  ActivatedAddEditEmpComp: boolean = false;
  emp: any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick() {
    this.emp = {
      employeeId: "0",
      employeeName: "",
      department: "",
      dateOfJoining: "",
      photoFileName: "avatar.jpg"
    }

    this.ModalTitle = "Add Employee";
    this.ActivatedAddEditEmpComp = true;
  }

  editClick(item: any) {
    this.emp = item;
    this.ModalTitle = "Edit Employee";
    this.ActivatedAddEditEmpComp = true;
  }

  deleteClick(item: any) {
    if(confirm('Are you sure?')) {
      this.service.deleteEmployee(item.employeeID).subscribe(data => {
        console.log(data);
        this.refreshEmpList();
      })
    }
  }

  closeClick() {
    this.ActivatedAddEditEmpComp = false;
    this.refreshEmpList();
  }

  refreshEmpList() {
    this.service.getEmployeeList().subscribe(data => {
      this.EmployeeList = data;
      console.log(data)
    })
  }
}
