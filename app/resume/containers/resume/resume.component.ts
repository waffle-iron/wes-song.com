import {Component, OnInit} from '@angular/core';

import {Resume} from '../../models/resume.interface';

@Component({
    selector: 'resume-component',
    styleUrls: ['resume.component.scss'],
    template: `
    <div>
        Resume Component
    </div>
    `
})

export class ResumeComponent implements OnInit {
    resume: Resume;
    constructor() {}
    ngOnInit() {
    
    }
}