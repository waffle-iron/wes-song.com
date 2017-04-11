import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { UIRouterModule, UIView } from 'ui-router-ng2';
import { APP_STATE } from './app.states';
import { routerConfigFn } from './router.config'

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        UIRouterModule.forRoot({
            states: APP_STATES,
            useHash: true,
            otherwise: { state: 'home' },
            config: routerConfigFn,
        }),
        BrowserModule,
        CommonModule,
        NgbModule.forRoot()
    ],
    bootstrap: [UIView]
})

export class AppModule {}