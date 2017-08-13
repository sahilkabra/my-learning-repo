module Todo.View exposing (todoView)

import RemoteData exposing (WebData)
import Todo.Actions exposing (Action)
import Html exposing (Html, div, input, span)
import Html.Attributes exposing (type_, id, name, checked, value, class)
import Todo.Model exposing (TodoModel, TodoItem, initialModel)


todoView : TodoModel -> Html Action
todoView model =
    div [ class "todo-container" ]
        (maybeList model.todos)


maybeList : WebData (List TodoItem) -> List (Html Action)
maybeList response =
    case response of
        RemoteData.NotAsked ->
            [ Html.text "" ]

        RemoteData.Loading ->
            [ Html.text "loading" ]

        RemoteData.Success todos ->
            (List.map todoItemView todos)

        RemoteData.Failure error ->
            [ Html.text (toString error) ]


todoItemView : TodoItem -> Html Action
todoItemView todo =
    div [ class "todo-item" ]
        [ input [ type_ "checkbox", value (toString todo.id), name "todo" ] []
        , span [ class "todo-label" ] [ Html.text todo.task ]
        ]
