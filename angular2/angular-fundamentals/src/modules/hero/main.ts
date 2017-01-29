import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import Module from './hero.module';
import Hero from './hero';

export {
    Hero as HeroModel,
    Module as HeroModule,
};

platformBrowserDynamic().bootstrapModule(Module);

