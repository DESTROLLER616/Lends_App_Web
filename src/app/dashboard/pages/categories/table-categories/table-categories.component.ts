import { Component, Input, OnInit, Output } from '@angular/core';
import { Categories } from 'src/app/models/categories.interface';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.css']
})
export class TableCategoriesComponent implements OnInit{
  @Input() category?: Categories

  ngOnInit(): void {

  }
}
