import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable()
export abstract class HttpBaseService<T> {
    public constructor(protected httpClient: HttpClient, protected env: EnvironmentService, private endPoint: string) { }

    public GetString(method: string = ''): Observable<string> {
        return this.httpClient.get(this.Path, {responseType: 'text'});
    }

    public GetAll(): Observable<T[]> {
        return this.httpClient.get<T[]>(this.Path);
    }

    public GetById(id: string): Observable<T> {
        return this.httpClient.get<T>(this.Path + '/' + id);
    }

    public GetByParam(param: string): Observable<T> {
        return this.httpClient.get<T>(this.Path + '/' + param);
    }

    public Post(model: T): Observable<T> {
        return this.httpClient.post<T>(this.Path, model);
    }

    private get Path(): string {
        return this.env.Api + '/' + this.endPoint;
    }
}
