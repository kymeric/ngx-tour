import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

@NgModule({
    declarations: [
        EscapeHtmlPipe,
    ],
    exports: [
        EscapeHtmlPipe,
    ],
    imports: [
        CommonModule,
    ],
})
export class UtilModule {
}
