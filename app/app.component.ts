import {Component} from '@angular/core';



@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <menu-bar></menu-bar>
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent {

}