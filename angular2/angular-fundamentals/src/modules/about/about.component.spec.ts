import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import AboutComponent from './about.component';
import {expect} from 'chai';

describe('About Component', () => {
    let de: DebugElement;
    let comp: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    before(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
        })
    });

    before(() => {
        fixture = TestBed.createComponent(AboutComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it ('should create component', () => expect(comp).to.be.an('object'));
});
