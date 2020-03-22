import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class EnvironmentService {
    protected static readonly Env = environment;

    public get Api() {
        return EnvironmentService.Env.api;
    }
}
