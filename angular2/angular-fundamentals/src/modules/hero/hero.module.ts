import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import Component from './hero.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [Component,],
    bootstrap: [Component],
})
export default class Module {}

