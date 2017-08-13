module Main exposing (main)

import Todo.Actions exposing (Action, fetchTodos)
import Html exposing (Html, program)
import Todo.Reducer exposing (reducer)
import Todo.Model exposing (TodoModel, TodoItem, initialModel)
import Todo.View exposing (todoView)


main : Program Never TodoModel Action
main =
    program
        { init = init
        , view = todoView
        , update = reducer
        , subscriptions = subscriptions
        }


init : ( TodoModel, Cmd Action )
init =
    ( initialModel, fetchTodos )


subscriptions : TodoModel -> Sub Action
subscriptions model =
    Sub.none
