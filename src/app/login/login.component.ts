import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';
import { SigninService } from './signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private loginService: LoginService,
    private routes: Router,
    private SigninService: SigninService,

  ) {

  }


  username: string = '';
  password: string = '';
  data: any;

  signup() {

    const dataJson = { username: this.username, password: this.password };
    this.loginService.signin(dataJson).subscribe({

    });
    ///



    console.log('signin successful');
    console.log('Username: ' + this.username);
  }

  signin() { //i have to complete error handling part
    const dataJson = { username: this.username, password: this.password };

    this.SigninService.signin(dataJson).subscribe({
      next: (response) => {
        this.data = response; //jwt token came
        console.log(this.data);
        this.routes.navigate(['/home']);
      }
      ,
      error: (error) => {
        console.error(error);
        this.routes.navigate(['/login']);
      }
    });
  }
}


