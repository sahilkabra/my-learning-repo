import {setEntries, next, vote, DEFAULT_STATE} from './core';

export function reducer(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case 'SET_ENTRIES': 
            return setEntries(state, action.entries);
        case 'VOTE': 
            return state.update('vote',
                    votestate => vote(votestate, action.entry));
        case 'NEXT': 
            return next(state);
    }
    return state;
}
