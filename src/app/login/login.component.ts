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

  constructor(private userLoginService:userLoginService) {
    // console.log(this.user);
   }

  ngOnInit(): void {
    
}

// getuser(data){
  
//   data=this.userdataservice.getUserdata(data);
//   this.user=data[2];
//   console.log(data)
//   console.log(this.user);
// }
    getuserlogin(data){
      data = this.userLoginService.getUserLogindata(data);
      this.userLogindata = data;
      console.log(data);
      console.log(this.userLogindata)
    }

    setuserlogin(email,pwd){
      this.userLoginService.setUserdata(email,pwd);
      
    }

    onSubmit(data){
      console.log(data);
    }
  }
