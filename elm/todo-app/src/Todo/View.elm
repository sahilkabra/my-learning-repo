module Todo.View exposing (todoView)

import Todo.Actions exposing (Action)
import Html exposing (Html, div, input, span)
import Html.Attributes exposing (type_, id, name, checked, value, class)
import Todo.Model exposing (TodoModel, TodoItem, initialModel)


todoView : TodoModel -> Html Action
todoView model =
    div [ class "todo-container" ]
        (List.map todoItemView model.todos)


todoItemView : TodoItem -> Html Action
todoItemView todo =
    div [ class "todo-item" ]
        [ input [ type_ "checkbox", value (toString todo.id), name "todo" ] []
        , span [ class "todo-label" ] [ Html.text todo.task ]
        ]
