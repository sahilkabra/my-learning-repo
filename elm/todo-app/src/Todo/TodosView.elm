module Todo.TodosView exposing (todosView, todoItemView, notFoundView)

import RemoteData exposing (WebData)
import Todo.Actions exposing (Action)
import Html exposing (Html, div, input, span)
import Html.Attributes exposing (type_, id, name, checked, value, class)
import Todo.Model exposing (TodoModel, TodoItem, TodoItemId, initialModel)
import Todo.TodoView exposing (todoView)


todosView : WebData (List TodoItem) -> Html Action
todosView todos =
    div [ class "todo-container" ]
        (maybeList todos)


todoItemView : TodoModel -> TodoItemId -> Html Action
todoItemView model id =
    case model.todos of
        RemoteData.Success todos ->
            let
                maybeTodo =
                    todos
                        |> List.filter (\todo -> todo.id == id)
                        |> List.head
            in
                case maybeTodo of
                    Just todo ->
                        todoView todo

                    Nothing ->
                        notFoundView

        _ ->
            let
                v =
                    maybeList model.todos
                        |> List.head
            in
                case v of
                    Just v ->
                        v

                    Nothing ->
                        notFoundView


notFoundView : Html Action
notFoundView =
    div [] [ Html.text "Not found" ]


maybeList : WebData (List TodoItem) -> List (Html Action)
maybeList response =
    case response of
        RemoteData.NotAsked ->
            [ Html.text "" ]

        RemoteData.Loading ->
            [ Html.text "loading" ]

        RemoteData.Success todos ->
            (List.map todoView todos)

        RemoteData.Failure error ->
            [ Html.text (toString error) ]
