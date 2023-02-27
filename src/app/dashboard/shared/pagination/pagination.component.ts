import {Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  page = 1

  @Output() pageNum = new EventEmitter<number>()

  more(){
    if(this.page >= 2){
      this.page = 5
    } else{
      this.page++
    }

    console.log(this.page);

    this.pageNum.emit(this.page)
  }

  minus(){
    if(this.page <= 1){
      this.page = 1
    } else{
      this.page--
    }

    console.log(this.page);
    

    this.pageNum.emit(this.page)
  }

  getPage(){
    return this.page
  }
}
