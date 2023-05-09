import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  binding:string=''
  employee: {
    id:Number,
    firstname: String,
    lastname:String,
    email: String,
    department:String,
    address:String,
    contactnumber:Number,
    description:String,
    status:String,
  }[] = [];
constructor(private formbuilder: FormBuilder, private api: ApiService) {}
ngOnInit() {
  this.getEmployee();
}
getEmployee() {
  this.api.getData().subscribe((response: any) => {
    this.employee = response;
    console.log(this.employee);
  });
}
delete(id: Number) {
  this.api.deleteData(id).subscribe(() => {
    this.getEmployee();
  });
}
}
