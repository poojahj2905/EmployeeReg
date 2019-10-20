import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8089/api/employee';

    constructor(private http: HttpClient) { }

  createCustomer(employee: Object): Observable<Object> 
  {
    console.log("LLLLLLLLLLL....")
    return this.http.post(`${this.baseUrl}` + `/create`, employee);
  }



}