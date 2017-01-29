import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import Component from './app.component';
import HeroModule from 'src/modules/hero/hero.module';

@NgModule({
    imports: [
        BrowserModule,
        HeroModule,
    ],
    declarations: [Component,],
    bootstrap: [Component],
})
export default class Module {}
platformBrowserDynamic().bootstrapModule(Module);

