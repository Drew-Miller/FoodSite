import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpBaseService } from './http.base.service';
import { EnvironmentService } from './environment.service';

@Injectable()
export class ApiService extends HttpBaseService<string> {

    public constructor(http: HttpClient, env: EnvironmentService) {
        super(http, env, '');
    }

    public Get(): Observable<string> {
        return this.GetString();
    }
}
