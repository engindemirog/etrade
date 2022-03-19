import { Component, OnInit } from '@angular/core';
import { CategoryListModel } from 'src/app/core/models/categoryListModel';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: CategoryListModel[];
  selectedCategory: CategoryListModel;

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data=>{
      this.categories = data;
    })
  }

}
