import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ResumeModule} from './resume/resume.module';

import {AppComponent} from './app.component';
import {MenuBarComponent} from './menu-bar.component';

const routes: Routes = [
    {path:'', redirectTo: 'resume', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        MenuBarComponent
    ],
    imports: [
        //Angular Modules
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        
        //Custom Modules
        ResumeModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}