import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import AppComponent from './app.component';
import {expect} from 'chai';

xdescribe('App Component', () => {
    let comp: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [AppComponent],
        });
        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;
    });

    it ('should create component', () => expect(comp).to.be.an('object'));
});
