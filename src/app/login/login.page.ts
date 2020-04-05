import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { LoginAccess, Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'nbk-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private nav: Router) { }

  loginForm: FormGroup;
  loginAccess: LoginAccess

  automaticClose: boolean

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.compose([
        Validators.required,
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  loginAction(loginForm: Login) {
    this.loginService.checkLogin(loginForm).subscribe(result => {
      let navigationExtras: NavigationExtras = {
        state: {
          userId: result.userId
        }
      }
      if (result.authentication) {
        this.nav.navigate(['/conta-corrente'], navigationExtras)
      }
    }, error => alert("Acesso negado! Por favor verifique se os dados informados estão corretos."))
  }

}
