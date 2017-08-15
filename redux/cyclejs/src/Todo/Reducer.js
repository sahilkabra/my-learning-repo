import * as Actions from './Actions';
import createModel from './Model';

const initialState = {
    todos: [],
};

export const TodoReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.FETCH_TODOS:
            const id = state.todos.length + 1;
            return {
                todos: state.todos.concat(
                    createModel(id, `Todo${id}`)
                ),
            };
        case Actions.MARK_COMPLETED:
            return markCompleted(state, action.payload);
        default:
            return state;
    };
};

function markCompleted({ todos }, todoId) {
    const todo = head(todos.filter(t => t.id === todoId));
    const updatedTodos = todos;
    return {
        todos: updatedTodos,
    };
}

