import {Component} from '@angular/core';

interface Nav {
    link: string,
    name: string,
    exact: boolean
}

@Component({
    selector: 'menu-bar',
    styleUrls: ['menu-bar.component.scss'],
    template: `
        <nav class="nav">
            <a *ngFor="let item of nav"
               [routerLink]="item.link"
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact:item.exact}">
                {{item.name}}
            </a>
        </nav>
    `
})
export class MenuBarComponent{
    nav: Nav[] = [
        {
            link: '/',
            name: 'Home',
            exact: true
        }
    ];
}