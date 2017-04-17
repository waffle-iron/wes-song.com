import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ResumeComponent} from './containers/resume/resume.component';

const routes: Routes = [
    {path: 'resume', component: ResumeComponent, pathMatch: 'full'},
];

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        ResumeComponent
    ]
})

export class ResumeModule {}