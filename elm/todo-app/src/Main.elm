module Main exposing (main)

import Todo.Actions exposing (Action, fetchTodos)
import Html exposing (Html, program, div)
import Todo.Reducer exposing (reducer)
import Todo.Model exposing (TodoModel, TodoItem, initialModel, Route(..))
import Todo.TodosView exposing (todosView, todoItemView, notFoundView)
import Navigation exposing (Location)
import Routing


main : Program Never TodoModel Action
main =
    Navigation.program Todo.Actions.OnLocationChange
        { init = init
        , view = view
        , update = reducer
        , subscriptions = always Sub.none
        }


init : Location -> ( TodoModel, Cmd Action )
init location =
    let
        currentRoute =
            Routing.parseLocation location
    in
        ( initialModel currentRoute, fetchTodos )


view : TodoModel -> Html Action
view model =
    case model.route of
        RouteTodosHome ->
            todosView model.todos

        RouteNotFound ->
            notFoundView

        RouteTodoItem id ->
            todoItemView model id
