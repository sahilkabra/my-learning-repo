import {
    Component,
    OnInit,
} from '@angular/core';

import {
    HeroModel,
    HeroModule,
    HeroService,
} from 'src/modules/hero/main';

@Component({
    selector: 'app',
    templateUrl: './app.html',
    providers: [HeroService],
})
export default class AppComponent implements OnInit {
    heroes: HeroModel[];

    constructor(private heroService: HeroService) {
    }

    ngOnInit(): void {
        this.getHeroes().then(heroes => this.heroes = heroes);
    }

    async getHeroes(): Promise<HeroModel[]> {
        return await this.heroService.getHeroes();
    }
}
