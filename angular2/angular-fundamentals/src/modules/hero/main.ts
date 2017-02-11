import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import Module from './hero.module';
import Hero from './hero';
import HeroService from './hero.service';

export {
    Hero as HeroModel,
    Module as HeroModule,
    HeroService,
};

platformBrowserDynamic().bootstrapModule(Module);

