import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }

  password:string='';
  defaultvalue = "Asia"
  countries:String[] = ['Asia','Africa','Europe','North America','South America','Antarctica'];

  countryHasError = true;

  validateCountry(value){
    if(value === 'default'){
      this.countryHasError = true;
    }
    else 
    this.countryHasError = false;
  }
  

}
