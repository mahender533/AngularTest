import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data);
    });
    
    
   
}



public getJSON(): Observable<any> {

    return this.http.get("./assets/employee.json");

}

public saveData(employee:any): Observable<any> {
alert(employee.length);
 return this.http.post("./assets/employee.json",employee);


}

}