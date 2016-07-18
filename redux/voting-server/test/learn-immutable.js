import {expect} from 'chai';
import {List} from 'immutable';

describe('immutability', () => {
    describe("a number", () => {
        function increment(number) {
            return number + 1;
        }

        it ('is immutable', () => {
            let state = 42;
            let nextstate = increment(state);

            expect(state).to.equal(42);
            expect(nextstate).to.equal(43);
        });
    });

    describe('immutable list', () => {
        describe('Add to List', () => {
            function addMovieTo(list, movie) {
                return list.push(movie);
            }

            it('is immutable', () => {
               let orgList = List.of('A', 'B');
               let newList = addMovieTo(orgList, 'C');

               expect(orgList).to.equal(List.of('A', 'B'));
               expect(newList).to.equal(List.of('A', 'B', 'C'));
            });
        });
    });
});
