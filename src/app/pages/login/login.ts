import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { MenuController } from '@ionic/angular';




@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '', mobile: ''};
  submitted = false;
  ShowOtpForm = false;
  // tslint:disable-next-line:variable-name
  password_type: any;


  constructor(
    public userData: UserData,
    public router: Router,
    public menu: MenuController,
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/home');
    }
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  OtpForm() {
    this.ShowOtpForm = true;
  }
  EmailForm() {
    this.ShowOtpForm = false;

  }
  togglePasswordMode() {
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
  }
  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
