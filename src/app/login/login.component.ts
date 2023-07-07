import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { NoteRouterService } from '../service/note-router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private loginService : LoginService , private routeService : NoteRouterService) { }

  ngOnInit(): void {
  }

  password : string = "" ;
  email : string = " ";

  validatePassword() {
    this.loginService.login(this.password);
    if(this.loginService.isLoggedIn) {
        this.routeService.toHome();
    }
  }

}
