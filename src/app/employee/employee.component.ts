import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import{EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
id:string="";
abc:any[]=[];
empData:any[]=[];
savedata:any=[];
employeeid:number;
  constructor(private activatedRoute:ActivatedRoute,private service :EmployeeService,private routes:Router) { 
    this.empData=[];
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

  }
  // getGridData(id:any){
  //   this.service.getJSON().subscribe(data=>this.abc=data);
   
    
  // }
  saveEmployee()
  {
    this.service.saveData("madhavi").subscribe(data=>this.abc=data);
  }
 
  m2(){
    this.routes.navigate(['/ds']);
  }
  m1(){
    this.service.getJSON().subscribe(data=>this.abc=data);
    for(let i = 0; i < this.abc.length;i++){
      if (this.abc[i]["id"] ===parseInt(this.id)) {
        this.empData.push(this.abc[i]);
        alert("hello");
      }

    }
    
  }
}
