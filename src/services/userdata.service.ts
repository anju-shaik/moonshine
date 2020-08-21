import { Injectable } from '@angular/core';

import { UserModel } from '../app/model/user.model'

@Injectable({
  providedIn: 'root'
})
export class userdataService {
  // user : userModel = {
  //   name:undefined,
  //   email:undefined,
  //   address:undefined,
  //   phoneno:undefined,
  //   password:undefined,
  //   country:undefined,
  // };  

  user : UserModel[] = [
    {name:'anju', email:'abc@g.com', address:'hyd', phoneno:76576557, password:'abc', country:'asia'  },
    {name:'alas', email:'kh@g.com', address:'kj', phoneno:43543, password:'jh', country:'asia'  },
    {name:'anskdfju', email:'posi@g.com', address:'kshdf', phoneno:76, password:'jh', country:'asia'  },
    {name:'iaud', email:'kjcs@g.com', address:'ksdf', phoneno:656, password:'jg', country:'asia'  }

  ]
   

  constructor() { }

     getUserdata(data){
       return this.user;             
    }


}
