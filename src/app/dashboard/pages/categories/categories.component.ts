import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Categories } from 'src/app/models/categories.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  constructor(public categoriesService: CategoriesService){}
  
  categories: Categories[] = []
  skip: any = 0

  category: Categories = {
    _id: '',
    name: '',
    description: ''
  }

  ngOnInit(): void {
    this.getCategories()
  }

  cleanForm(form: NgForm){
    return form.reset()
  }

  getCategories(){
    const skip = this.getPagination()

    this.categoriesService.getCategories(skip)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      console.log(res);
      
      const {data} = res
      this.categories = [...data]
      console.log(this.categories);
    })
  }

  getPagination(): any{
    this.categoriesService.getCategories()
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      console.log(res.total);
      const total = res.total

      console.log(Math.ceil(total / 10));
      

      return Math.ceil(total / 10)
    })
  }

  addCategory(form: NgForm){
    this.categoriesService.createCategory(form.value).subscribe(
      res => {
        this.getCategories()
        this.cleanForm(form)
      },
      err => {
        console.log(err);
      }
    )
  }

}
