import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import HeroComponent from './hero.component';
import {expect} from 'chai';

describe('Hero Component', () => {
    let titleDe: DebugElement;
    let nameDe: DebugElement;
    let comp: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HeroComponent],
        });
        fixture = TestBed.createComponent(HeroComponent);
        comp = fixture.componentInstance;
        titleDe = fixture.debugElement.query(By.css('h1'));
        nameDe = fixture.debugElement.query(By.css('h2'));
    });

    it ('should create component', () => expect(comp).to.be.an('object'));
    it ('should have title', () => {
        fixture.detectChanges();
        expect(titleDe.name).to.equal('h1');
        expect(titleDe.nativeElement.textContent).to.equal('Tour Of Heroes');
    });
    it ('should have name', () => {
        fixture.detectChanges();
        expect(nameDe.name).to.equal('h2');
        expect(nameDe.nativeElement.textContent).to.equal('Windstorm');
    });
});
