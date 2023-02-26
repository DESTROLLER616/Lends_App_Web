import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Login } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private http: HttpClient) { }

  URL_LOGIN = 'https://lends-backend.onrender.com/authentication'

  authenticated(login: Login){
    return this.http.post(this.URL_LOGIN, login)
  }
}
