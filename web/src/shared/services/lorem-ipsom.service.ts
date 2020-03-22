import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpBaseService } from './http.base.service';
import { EnvironmentService } from './environment.service';

@Injectable()
export class LoremIpsomService extends HttpBaseService<any> {

    public constructor(http: HttpClient, env: EnvironmentService) {
        super(http, env, 'lorem-ipsom');
    }

    public Get(words: number): Observable<string> {
        return super.GetByParam(words.toString())
            .pipe(map((value: string) => {
                return value.replace(/\b\w/g, l => l.toUpperCase());
        }));
    }
}
