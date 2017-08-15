export const FETCH_TODOS = 'FETCH_TODOS';
export const MARK_COMPLETED = 'MARK_COMPLETED';

export function fetchTodos() {
    return {
        type: FETCH_TODOS,
    };
}

export function markCompleted(todoId) {
    return {
        type: MARK_COMPLETED,
        payload: todoId
    }
}
