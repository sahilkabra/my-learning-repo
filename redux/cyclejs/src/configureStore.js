import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { TodoReducer } from 'src/Todo/Reducer';

const middleware = [createLogger()];

const rootReducer  = combineReducers({
    Todo: TodoReducer,
});

function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );
    return store;
}

export const store = configureStore();
