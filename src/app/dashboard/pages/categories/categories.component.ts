import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { delay, take } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { Categories } from 'src/app/models/categories.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit, OnChanges{
  constructor(public categoriesService: CategoriesService){}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('hELLO')
  }
  
  categories: Categories[] = []
  skip?: number
  totales: number = 0
  pageNum: number = 1

  category: Categories = {
    _id: '',
    name: '',
    description: ''
  }

  ngOnInit(): void {
    this.getCategories(this.pageNum)
  }

  cleanForm(form: NgForm){
    return form.reset()
  }

  getCategories(page: number = 0){
    this.categoriesService.getCategories(page * 10)
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      console.log(res);
      
      const {data, total} = res
      this.categories = [...data]
      console.log(this.categories);
      this.skip = total
      console.log(total);
      console.log(this.skip);
    })
  }

  getPagination(pages: number = 1): any{
    this.categoriesService.getCategories()
    .pipe(
      take(1)
    ).subscribe( (res:any) => {
      this.skip = res
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
