import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ApiService,
  Food, FoodService,
} from 'src/shared/shared.bundle';

@Component({
  selector: 'default-root',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  title = 'web';
  endPoint: string;
  api: string;
  food: Food;

  public constructor(
    private apiService: ApiService,
    private foodService: FoodService) {
    this.apiService.Get().subscribe({
      next: (value) => {
        this.api = value;
      }
    });
    this.foodService.GetById('00000000-0000-0000-0000-000000000000').subscribe({
      next: (value) => {
        this.food = value;
      }
    });
  }

  public get Api() {
    return this.api;
  }
  public get Food() {
    return this.food;
  }
}
