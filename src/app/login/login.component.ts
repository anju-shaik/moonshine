import { Component, OnInit } from '@angular/core';
import { userLoginService } from '../../services/userlogin.service';
import { LoginModel } from '../model/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogindata : LoginModel[] = [{email:undefined, password:undefined}];
  //userLogindata : LoginModel[];
  flag : boolean = false;

  constructor(private userLoginService:userLoginService) {
    // console.log(this.user);
   }

  ngOnInit(): void { 
}

    // getuserlogin(data){
    //   this.flag=!this.flag;
    //   data = this.userLoginService.getUserLogindata(data);
    //   this.userLogindata = data;
    //   console.log(data);
    //   // console.log(this.userLogindata)
    // }

    getUserLogin(data){
      this.flag=!this.flag;
      data = this.userLoginService.getUserLogindata(data);
      this.userLogindata = data;
    }

    setuserlogin(userdata: {email:string , password:string}){
      this.userLoginService.setUserdata(userdata);
      
    }

    // onSubmit(userlogin){
    //   this.userLoginService.setUserdata(userlogin.email,userlogin.pwd);
    //   console.log(this.userLoginService.user)
    // }

    onSubmit(userdata: {email:string , password:string}){
      this.userLoginService.setUserdata(userdata);
      console.log(userdata)
    }

    deleteUser(index:number){
      this.userLoginService.deleteUser(index);
    }
  }
