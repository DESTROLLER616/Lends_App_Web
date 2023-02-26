import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { take } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  constructor(private cookieService: CookieService,
              private categoriesService: CategoriesService){}

  name:string = this.cookieService.get('name')

  categoriesTotal: number = this.getCategoriesTotal()

  ngOnInit(): void {
    this.categoriesTotal = this.getCategoriesTotal()
  }

  getCategoriesTotal(): any{
    this.categoriesService.getCategories()
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      const {total} = res
      console.log(total);
      return total
    },
    (err) => {
      return 0
    })
  }
}
