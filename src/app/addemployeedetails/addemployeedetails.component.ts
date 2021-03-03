import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import{EmployeeService} from '../employee.service';

@Component({
  selector: 'app-addemployeedetails',
  templateUrl: './addemployeedetails.component.html',
  styleUrls: ['./addemployeedetails.component.css']
})
export class AddemployeedetailsComponent implements OnInit {
fname: any=[];
lname:any=[];
mobileno:number;
email:any;
addlist:any=[];
savedata:any=[];
employee:any[];
@Input()
childMessage:string;
@Output() 
myevnt=new EventEmitter<string>();

m1()
{
  this.myevnt.emit("inform from child")
}
 constructor(private activatedRoute:ActivatedRoute,private service :EmployeeService,private routes:Router) { 

  }

  
  ngOnInit() {
    alert(this.childMessage)
  

  

  }
  onSubmit()
  {


    

  

  }

 

}
