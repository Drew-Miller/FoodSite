import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ApiService,
  Food, FoodService,
  LoremIpsomService,
} from 'src/shared/shared.bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web';
  private endPoint: string;
  private api: string;
  private food: Food;
  private loremIpsom: string;

  public constructor(
    private apiService: ApiService,
    private foodService: FoodService,
    private loremService: LoremIpsomService) {
    this.apiService.Get().subscribe({
      next: (value) => {
        this.api = value;
      }
    });
    this.foodService.GetById('00000000-0000-0000-0000-000000000000').subscribe({
      next: (value: Food) => {
        this.food = value;
      }
    });
    this.loremService.Get(800).subscribe({
      next: (value) => {
        this.loremIpsom = value;
      }
    });
  }

  public get Api() {
    return this.api;
  }
  public get Food() {
    return this.food;
  }

  public get Lorem() {
    return this.loremIpsom;
  }
}
