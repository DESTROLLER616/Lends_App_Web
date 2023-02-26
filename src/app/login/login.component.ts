import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router,
    private fb: FormBuilder,
    public logService: LogService,
    public cookieService: CookieService){}
  
  er:string = ''

  ngOnInit(){
    // this.cookieService.deleteAll()
    if(this.cookieService.check('token')) this.router.navigate(['dashboard']) 
  }

  get email(){
    return this.formUser.get('email') as FormControl
  }

  get password(){
    return this.formUser.get('password') as FormControl
  }

  get strategy() {
    return this.formUser.get('strategy') as FormControl
  }

  formUser = this.fb.group({
    'email': ['', [Validators.required, Validators.email]], 
    'password': ['', [Validators.required, Validators.minLength(8)]],
    'strategy': ['local', []]
  })

  values = this.formUser?.value

  login() {
    this.logService.authenticated(this.formUser.value).subscribe( (res:any) => {
        const {user, accessToken} = res
        console.log(res.user)

        this.cookieService.set('token', accessToken)
        this.cookieService.set('id', user._id)
        this.cookieService.set('name', user.fullname)
        this.cookieService.set('email', user.email)
        this.cookieService.set('telephone', user.telephone)
        console.log('logged');
        
        this.router.navigate(['dashboard'])
      },
      (err) => {
        this.cookieService.deleteAll()
        this.er = 'no autorizado'
      }
    )
  }
}
