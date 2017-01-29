import {
    Component,
} from '@angular/core';

import {HeroModel, HeroModule} from 'src/modules/hero/main';

const HEROES: HeroModel[] = [
    {id: 1, name: 'Superman'},
    {id: 2, name: 'Batman'},
    {id: 3, name: 'Antman'},
    {id: 4, name: 'Spiderman'},
    {id: 5, name: 'Magma'},
    {id: 6, name: 'Hulk'},
    {id: 7, name: 'Magneta'},
];

@Component({
    selector: 'app',
    templateUrl: './app.html'
})
export default class AppComponent {
    heroes = HEROES;
}
