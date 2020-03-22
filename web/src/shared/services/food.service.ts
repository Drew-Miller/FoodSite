import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpBaseService } from './http.base.service';
import { EnvironmentService } from './environment.service';
import { Food } from '../models/food';

@Injectable()
export class FoodService extends HttpBaseService<Food> {

    public constructor(http: HttpClient, env: EnvironmentService) {
        super(http, env, 'food');
    }

    public GetAll(): Observable<Food[]> {
        return super.GetAll();
    }

    public GetById(id: string): Observable<Food> {
        return super.GetById(id);
    }
}
