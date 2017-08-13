module Todo.TodoView exposing (todoView)

import Html exposing (Html, div, i, input)
import Html.Attributes exposing (type_, name, value, class)
import Todo.Model exposing (TodoItem, TodoStatus(..))
import Todo.Actions exposing (Action)


todoView : TodoItem -> Html Action
todoView todo =
    div [ class "todo-item mb2 white p1" ]
        [ input [ type_ "checkbox", value (toString todo.id), name "todo" ] []
        , input [ type_ "text", class "todo-task", value (toString todo.task) ] []
        , status todo.status
        ]


status : TodoStatus -> Html Action
status todoStatus =
    case todoStatus of
        Complete ->
            i [ class "fa fa-check" ] []

        Pending ->
            i [ class "fa fa-times" ] []

        Inprogress ->
            i [ class "fa fa-spinner" ] []
