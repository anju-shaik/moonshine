import { Component, OnInit } from '@angular/core';
import { userLoginService } from '../../services/userlogin.service';
import { UserModel } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user : userModel = {
  //   name:undefined,
  //   email:undefined,
  //   address:undefined,
  //   phoneno:undefined,
  //   password:undefined,
  //   country:undefined,
  // };  

  userLogindata : UserModel[];
  flag:boolean=false;

  constructor(private userLoginService:userLoginService) {
    // console.log(this.user);
   }

  ngOnInit(): void { 
}

    getuserlogin(data){
      this.flag=!this.flag;
      data = this.userLoginService.getUserLogindata(data);
      this.userLogindata = data;
    }

    setuserlogin(email,pwd){
      this.userLoginService.setUserdata(email,pwd);
      
    }

    onSubmit(userlogin){
      console.log(this.userLogindata)
      this.userLoginService.setUserdata(userlogin.email,userlogin.pwd);
      // console.log(this.userLoginService.user)
    }

    deleteUser(index:number){
      this.userLoginService.deleteUser(index);
    }
  }
