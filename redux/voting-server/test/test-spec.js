import {List, Map} from 'immutable';
import {expect} from 'chai';

import {setEntries, next, vote} from '../src/core';

describe('application logic', () => {
    describe('loading of entries', () => {
        it ('adds entries to the current state', () => {
            const state = Map();
            const entries = List.of('A','B');
            const nextState = setEntries(state, entries);

            expect(nextState).to.equal(Map({
                entries: List.of('A','B')
            }));
        });
    });
    describe('next', () => {
        it ('takes 2 entries from the list and allows to vote on them', () => {
            const state = Map({
                'entries': List.of('A','B','C','D')
            });
            const nextState = next(state);

            expect(nextState).to.equal(Map({
                entries: List.of('C','D'),
                vote: Map({pair: List.of('A', 'B')})
            }));
        });
        it('puts the winner back to the list of entries and proceeds to the next', () => {
            const state = Map({
                'entries': List.of('C','D'),
                'vote': Map({
                    'pair': List.of('A', 'B'),
                    'tally': Map({'A': 9, 'B': 8})
                })
            });
            const nextState = next(state);

            expect(nextState).to.equal(Map({
                entries: List.of('A'),
                vote: Map({
                    'pair': List.of('C', 'D')
                })
            }));
        });
        it('in case of a tie, both the entries are added back to the list of entries', () => {
            const state = Map({
                'entries': List.of('C','D', 'E'),
                'vote': Map({
                    'pair': List.of('A', 'B'),
                    'tally': Map({'A': 9, 'B': 9})
                })
            });
            const nextState = next(state);

            expect(nextState).to.equal(Map({
                entries: List.of('E', 'A', 'B'),
                vote: Map({
                    'pair': List.of('C', 'D')
                })
            }));
        });
        it('marks a winner when only one entry is left', () => {
            const state = Map({
                'entries': List(),
                'vote': Map({
                    'pair': List.of('A', 'B'),
                    'tally': Map({'A': 2, 'B': 1})
                })
            });
            const nextState = next(state);

            expect(nextState).to.equal(Map({
                winner: 'A'
            }));
        });
    });
    describe('voting process', () => {
        it('creates a tally for a voted entry', () => {
            const state = Map({
                'entries': List.of('C', 'D'),
                'vote': Map({
                    'pair': List.of('A', 'B')
                })
            });
            const nextState = vote(state, 'A');

            expect(nextState).to.equal(Map({
                'entries': List.of('C', 'D'),
                'vote': Map({
                    'pair': List.of('A', 'B'),
                    'tally': Map({'A': 1})
                })
            }));
        });
        it('increment a tally for a voted entry', () => {
            const state = Map({
                'entries': List.of('C', 'D'),
                'vote': Map({
                    'pair': List.of('A', 'B'),
                    'tally': Map({'A': 1, 'B': 2})
                })
            });
            const nextState = vote(state, 'A');

            expect(nextState).to.equal(Map({
                'entries': List.of('C', 'D'),
                'vote': Map({
                    'pair': List.of('A', 'B'),
                    'tally': Map({'A': 2, 'B': 2})
                })
            }));
        });
    });
});
