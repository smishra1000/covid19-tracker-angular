import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employees:any [];

  constructor() { 

    this.employees =[
      {
        "id":1,
        "name":"sameer",
        "age":20,
        "email":"sameer@gmail.com",
      },
      {
        "id":2,
        "name":"ravi",
        "age":20,
        "email":"ravi@gmail.com",
      },
      {
        "id":3,
        "name":"prabhat",
        "age":20,
        "email":"peee@gmail.com",
      }
    ]
  }

  ngOnInit() {
    
  }

  addEmployee(){
    this.employees.push({"id":4,name:"rashmi",age:"30",email:"ss@gmail.com"})
  }
  deleteEmployee(id){
    this.employees = this.employees.filter(function(item){
      return item.id==id
    })
  }

}
