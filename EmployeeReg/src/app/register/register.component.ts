import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'Registration Form';
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    // this.customerService.createCustomer(this.customer)
    //   .subscribe(data => console.log(data), error => console.log(error));
    console.log("PPPPPPPPP.......")
    this.employee = new Employee();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}




