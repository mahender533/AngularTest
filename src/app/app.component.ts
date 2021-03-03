import { Component} from '@angular/core';
import { FormBuilder,FormControl,Validators, FormGroup} from '@angular/forms';
import{EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   email:any
//   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
//   firstName:string
//   lastName:string
//   countries:any
//   selectedCountryValue:string="";
//   selectedstaeValue:string="";
//   states:any
//   details:boolean
//   upadte:boolean
//   staresValues:any=[];
//   employee:any[];
// userlist:any=[]
// mybulider:FormBuilder;
// addForm: FormGroup;
// constructor(private formBuilder: FormBuilder,private service :EmployeeService) {
//   this.countries = [{id: 'USA', name: 'United States'}, {id: 'UK', name: 'United Kingdom'}, {id: 'FR', name: 'France'}];
//   this.states = [{ id: "AL", name: "Alabama",countryId:'USA' }, { id: "AK", name: "Alaska",countryId:'USA' }, { id: "AZ", name: "Arizona",countryId:'UK' }, { id: "AR", name: "Arkansas",countryId:'FR' }];
//   // this.employee[{id:}

 
// }






// m1(abc){ 
//   this.staresValues=[];
//   this.countries.filter(elements=>{if(elements.id==abc){
//     this.selectedCountryValue=elements.name;
//   }})
//   this.states.filter(element=>{
//     if(element.countryId==abc)
//     {
//       this.selectedstaeValue=element.name;
//       this.staresValues.push(element)
//     }
//   });
// }
// getGridData(){
//   this.service.getJSON().subscribe(data=>this.employee=data);
// }
//   ngOnInit() {
//     // this.service.getJSON().subscribe(data=>this.employee=data)
    
//     this.mybulider=new FormBuilder();
//     this.addForm = this.mybulider.group({
//       id: [],
//       email:  ['', [Validators.required, Validators.pattern(this.emailPattern)]],
//       firstName: ["",[Validators.required,Validators.pattern("^[A-Za-z.//s]{1,}$")]],
//       lastName: ["",[Validators.required,Validators.pattern("^[A-Za-z.//s]{1,}$")]],
//       country: ['', Validators.required],
//       state: ['', Validators.required]
//     });
//     this.userlist.push({'firstName':'madhavi',id:1,lastName:'g','email':'madhu12@gmail.com'})
    
//   }
   
//   adduser()
//   {
// this.details=true;
// this.upadte=true;
//   }
//   onSubmit()
//   {
// this.userlist.push({'email':this.email,'firstName':this.firstName,'lastName':this.lastName,'country':this.selectedCountryValue,'states':this.selectedstaeValue})
// this.email='';
// this.firstName=null;
// this.lastName=null;


// }
// deleteUser(id)
// {
//   for(let i = 0; i < this.userlist.length; ++i){
//     if (this.userlist[i].id === id) {
//         this.userlist.splice(i,1);
//     }
//   }
// }
// editUser(id)
// {
//   for(let i = 0; i < this.userlist.length; ++i){
//     if (this.userlist[i].id === id) {
//       var x=  this.userlist[i]
//       this.email=x.email;
//       this.firstName=x.firstName;
//       this.lastName=x.lastName;
//       this.selectedCountryValue=x.country;
//       this.selectedstaeValue=x.states;
//       this.upadte = false;
//     }
// }
// }
// update()
// {
//   for(let i = 0; i < this.userlist.length; ++i){
//     if (this.userlist[i].email === this.email) {
      
//      this.userlist[i].firstName=this.firstName
//      this.userlist[i].lastName=this.lastName
//      this.userlist[i].country=this.selectedCountryValue
//      this.userlist[i].states=this.selectedstaeValue
//      this.upadte = false;
//      this.email =""
//      this.firstName=""
//      this.lastName=""
//     }
//     }
//   }
}




