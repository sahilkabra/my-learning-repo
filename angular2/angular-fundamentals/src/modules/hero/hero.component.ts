import {Component} from '@angular/core';


class Hero {
    id: number;
    name: string
}

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html'
})
export default class HeroComponent {
    title = 'Tour Of Heroes';
    hero: Hero = {
        id: 0,
        name: 'Windstorm',
    };
}

