import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public LoginData: FormGroup;


  constructor(
    private _formBuilder: FormBuilder,
    private _Router: Router,
    private _localStorageService: LocalStorageService) {
    this.LoginData = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })

  }
  user = {
    username: 'user',
    password: 'user'
  }

  admin = {
    username: 'admin',
    password: 'admin'
  }


  LoginForm(fromData: any) {
    let paramJson = {
      username: this.username?.value,
      password: this.password?.value
    }
    console.log(paramJson);
    console.log(this.user);
    if (this.username?.value === this.user.password && this.password?.value === this.user.password) {
      this._localStorageService.setJsonValue('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ");
      this._Router.navigate(['/']);
    } if (this.username?.value === this.admin.password && this.password?.value === this.admin.password) {
      this._localStorageService.setJsonValue('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ");
      this._Router.navigate(['/admin-dashboard']);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Sorry',
        text: 'username or password is incorrect!',
      })
    }
  }




  get username() {
    return this.LoginData.get('username')
  }
  get password() {
    return this.LoginData.get('password')
  }


}
