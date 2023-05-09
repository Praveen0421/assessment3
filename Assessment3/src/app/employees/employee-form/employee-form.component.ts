import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { Validation } from 'src/app/valid/validation';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employee: FormGroup;
  submitted = false ;
  employeee: {
    firstname: String,
    lastname:String,
    email: String,
    department:String,
    address:String,
    contactnumber:Number,
    description:String,
    status:any,
  }[] = [];
  constructor(private formBuilder: FormBuilder,  private api: ApiService, private route: Router) {
    this.employee = this.formBuilder.group(
      {

        firstname: [
          '',
          [
            Validators.required,
            Validators.maxLength(25),
            Validators.minLength(3),
          ],
        ],
        lastname: [
          '',
          [
            Validators.required,
            Validators.maxLength(25),
            Validators.minLength(3),
          ],
        ],
        department:['',[Validators.required]],
        address:['',[Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        contactnumber:['',[Validators.required]],
        description: [
          '',
          [
            Validators.required,
            Validators.maxLength(150),
            Validators.minLength(3),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
        confirmpassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
        status:['',[Validators.required]],
      },
      
      {
        validators:[Validation.match('password','confirmpassword')],
      }
    );
  }
  get f():{[key:string]:AbstractControl}{
    return this.employee.controls
  }
  getEmployee() {
    this.api.getData().subscribe((response: any) => {
      this.employeee = response;
      console.log(this.employeee);
    });
  }
  addEmployee(form: any) {
    console.log(form.value);
    this.postEmployee(form.value);
    form.reset();
  }
  postEmployee(data: any) {

  }
 onSubmit():void{
  this.submitted =true;
  if(this.employee.invalid){
    return;
   }
   console.log(this.employee);
   
   this.api.postData(this.employee.value).subscribe((response: any) => {
  });
  this.getEmployee();
    this.route.navigate(["/"])
 }

}
