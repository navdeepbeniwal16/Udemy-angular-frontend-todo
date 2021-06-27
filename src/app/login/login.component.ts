import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'denin16';
  password = '';

  errorMessage = 'User is Invalid'
  isInvalidUser = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);

    if(this.username === 'denin16' && this.password === 'password'){
      this.isInvalidUser = false;
    } else {
      this.isInvalidUser = true;
    }
  }

}