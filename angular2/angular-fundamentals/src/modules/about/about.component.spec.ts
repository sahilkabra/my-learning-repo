import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import AboutComponent from './about.component';
import {expect} from 'chai';

describe('About Component', () => {
    let de: DebugElement;
    let comp: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AboutComponent],
        });
        fixture = TestBed.createComponent(AboutComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it ('should create component', () => expect(comp).to.be.an('object'));
    it ('should have header', () => {
        fixture.detectChanges();
        expect(de.name).to.equal('h1');
        expect(de.nativeElement.textContent).to.equal('About Angular');
    });
});
