import {
    Component,
    Input,
} from '@angular/core';

import Hero from './hero';

@Component({
    selector: 'hero',
    templateUrl: './hero.component.html',
})
export default class HeroComponent {
    @Input()
    hero: Hero;
}

