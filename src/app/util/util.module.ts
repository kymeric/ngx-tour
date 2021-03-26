import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { EventBrokerService } from './services/event-broker.service';

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
    providers: [
        EventBrokerService,
    ],
})
export class UtilModule {
}
