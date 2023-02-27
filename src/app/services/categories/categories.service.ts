import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Categories } from 'src/app/models/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  URL_BASE = 'https://lends-backend.onrender.com/categories'

  public categories ?: Categories[]

  constructor(private http:HttpClient) { }

  getCategories(page = 0){
    return this.http.get<Categories[]>(`${this.URL_BASE}/?$skip=${page}`)
  }

  createCategory(category: Categories){
    return this.http.post(this.URL_BASE, category)
  }

  pagination(page:number){
    return this.http.get<Categories[]>(`${this.URL_BASE}/?$skip=${page}`)
  }
}
