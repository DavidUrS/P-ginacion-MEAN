import { CategoryService } from './../../services/category.service';
import { Category } from './../../Category';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators/take';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category[];
  categ: string;
  url: string;

  constructor(categoryService: CategoryService) {
    categoryService.getCategories().subscribe(categories => {
      this.category = categories;
      console.log(this.category);
    });
  }

  ngOnInit() {
  }

  findOne(cate,cover) {
    this.categ = cate;
    this.url = cover;
  }

}
