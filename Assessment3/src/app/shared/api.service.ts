import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('http://localhost:3000/employeeData');
  }
  postData(data: any) {

    return this.http.post('http://localhost:3000/employeeData', data);
  }
  deleteData(empid: Number) {
    return this.http.delete('http://localhost:3000/employeeData/' + empid);
  }
  fetchData(getData:number){
    return this.http.get('http://localhost:3000/employeeData/' + getData)
  }
  updateData(data:any,id:number){
    return this.http.put('http://localhost:3000/employeeData/' + id,data)
  }
}
