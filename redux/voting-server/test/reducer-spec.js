import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import {reducer} from '../src/reducer';

describe('reducer', () => {
    it('has an initial state', () => {
        const action = {type: 'SET_ENTRIES', entries: ['A']};
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            entries: ['A']
        }));
    });
    it('handles set entries', () => {
        const state = Map();
        const action = {type: 'SET_ENTRIES', entries: ['A', 'B']};
        const nextState = reducer(state, action);

        expect(nextState).to.equal(fromJS({
            'entries': ['A','B']
        }));
    });
    it('handles next', () => {
        const state = fromJS({
            'entries': ['C', 'D'],
            'vote': {
                'pair': ['A', 'B'],
                'tally': {'A': 3, 'B': 4}
            }
        });
        const action = {type: 'NEXT'};
        const nextState = reducer(state, action);

        expect(nextState).to.equal(fromJS({
            'entries': ['B'],
            'vote': {
                'pair': ['C', 'D']
            }
        }));
    });
    it('handles vote', () => {
        const state = fromJS({
            'entries': ['C', 'D'],
            'vote': {
                'pair': ['A', 'B'],
                'tally': {'A': 3, 'B': 4}
            }
        });
        const action = {type: 'VOTE', entry: 'A'};
        const nextState = reducer(state, action);

        expect(nextState).to.equal(fromJS({
            'entries': ['C', 'D'],
            'vote': {
                'pair': ['A', 'B'],
                'tally': {'A': 4, 'B': 4}
            }
        }));
    });
    it('shows the benefit of reduce', () => {
        const actions = [
            {type: 'SET_ENTRIES', entries: ['A','B']},
            {type: 'NEXT'},
            {type: 'VOTE', entry: 'A'},
            {type: 'VOTE', entry: 'B'},
            {type: 'VOTE', entry: 'B'},
            {type: 'NEXT'}
        ];

        const finalState = actions.reduce(reducer, Map());

        expect(finalState).to.equals(fromJS({
            'winner': 'B'
        }));
    });
});
