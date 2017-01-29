import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import HeroComponent from './hero.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    exports: [
        HeroComponent,
    ],
    declarations: [HeroComponent,],
    bootstrap: [HeroComponent],
})
export default class Module {}

