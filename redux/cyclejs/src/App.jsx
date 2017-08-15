import React from 'react';

import TodosView from 'src/Todo/View';

export const App = function App() {
    return (
        <div className="app-container">
            <div className="header">
                <h3>Todo List</h3>
            </div>
            <div className="app-body">
                <TodosView/>
            </div>
        </div>
    );
};
