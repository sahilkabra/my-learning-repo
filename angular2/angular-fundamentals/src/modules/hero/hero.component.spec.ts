import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {FormsModule} from '@angular/forms';
import HeroComponent from './hero.component';
import {expect} from 'chai';

describe('Hero Component', () => {
    let comp: HeroComponent;
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [HeroComponent],
        });
        fixture = TestBed.createComponent(HeroComponent);
        comp = fixture.componentInstance;
    });

    it ('should create component', () => expect(comp).to.be.an('object'));
    it ('should not have name when hero is not passed', () => {
        fixture.detectChanges();
        const nameDe = fixture.debugElement.query(By.css('h2'));
        expect(nameDe).to.be.null;
    });
    it ('should have name when hero is passed', () => {
        comp.hero = {id: 1, name: 'Windstorm'};
        fixture.detectChanges();
        const nameDe = fixture.debugElement.query(By.css('h2'));
        expect(nameDe.name).to.equal('h2');
        expect(nameDe.nativeElement.textContent).to.equal('Windstorm');
    });
});
