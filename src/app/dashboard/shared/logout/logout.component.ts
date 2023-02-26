import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private cookieService: CookieService, private router: Router){}

  logout(){
    const res = confirm('Desea cerrar su sesion?')

    if(res == true){
      this.cookieService.delete('token')
      this.router.navigate(['/login'])
    } 
  }
}
