import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActionsCreators from 'src/Todo/Actions';

class TodosView extends React.Component {
    constructor(props) {
        super(props);
        this.fetchTodos = this.fetchTodos.bind(this);
        this.handleOnComplete = this.handleOnComplete.bind(this);
    }
    componentDidMount() {
        this.fetchTodos();
    }
    render() {
        const { todos } = this.props;
        return (
            <div className='todolist-container'>
                { todos
                    && todos.map(
                        todo =>
                            <TodoItemView key={ todo.id } todo={ todo } onComplete={ this.handleOnComplete }/>
                    )
                }
            </div>
        );
    }
    fetchTodos() {
        this.props.actions.fetchTodos()
    }
    handleOnComplete(todoId) {
        this.props.actions.markCompleted(todoId);
    }
};
export default connect(
    ( state ) => ({
        todos: state.Todo.todos,
    }),
    ( dispatch ) => ({
        actions: bindActionCreators(TodoActionsCreators, dispatch)
    }),
)(TodosView);

export function TodoItemView ({todo, onComplete}) {
    return (
        <div>
            <input type='checkbox' name={ todo.id } value={ todo.id }/>
            <input type='text' value={ todo.task } readOnly/>
            <CompleteButton todoid= { todo.id } status={ todo.status } onClick={ onComplete }/>
        </div>
    );
}

class CompleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        const { status } = this.props;
        if (status !== 'complete') return <button onClick={ this.onClick }> Mark as completed </button>;
        else return <button disabled/>;
    }

    onClick() {
        this.props.onClick(this.props.todoid);
    }
}

