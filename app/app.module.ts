import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';

import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}