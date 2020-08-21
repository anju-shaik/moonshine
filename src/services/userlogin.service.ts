import { Injectable } from '@angular/core';


import { LoginModel } from '../app/model/login.model'

@Injectable({
  providedIn: 'root'
})
export class userLoginService {

  constructor() { }

  user:LoginModel[]=[
    {email:'admin@admin.com',password:'admin'},
    {email:'abc@g.com',password:'abc'}
  ];

  getUserLogindata(data){
    return this.user[data];
  }

  setUserdata(email,pwd){
    return this.user.push(email,pwd);
  }



}
