import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from 'src/shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        MatIconModule,
        CommonModule,
        SharedModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]
})
export class LayoutModule {}
