import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
    EnvironmentService,
    ApiService,
    FoodService,
    LoremIpsomService
} from './shared.bundle';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [
        EnvironmentService,
        ApiService,
        FoodService,
        LoremIpsomService
    ],
    declarations: [],
    exports: []
})
export class SharedModule { }
