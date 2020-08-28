import { Injectable } from '@angular/core';


import { LoginModel } from '../app/model/login.model'

@Injectable({
  providedIn: 'root'
})
export class userLoginService {

  constructor() { }

  user:LoginModel[]=[
    {email:'admin@admin.com',password:'admin'},
    {email:'user@user.com',password:'user'}
  ];

  // getUserLogindata(data){
  //   return this.user;
  // }

  getUserLogindata(data: {email:string , password:string} ){
    return this.user;
  }

//   setUserdata(email,pwd){
//     return this.user.push({email:email, password:pwd})
// }

    setUserdata(userdata: {email:string , password:string}){
       return this.user.push(userdata);
    }
    deleteUser(index:number){
        return this.user.splice(index,1);
    }
}
