import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.login({email:"engin@engin.com",password:"12345"})
    .subscribe(data=>{
      localStorage.setItem("token",data.token)
    },responseError=>{
      console.log(responseError.error)
    })
  }

}
