module Todo.Reducer exposing (..)

import Todo.Actions exposing (Action)
import Todo.Model exposing (TodoModel)
import Routing exposing (parseLocation)


reducer : Action -> TodoModel -> ( TodoModel, Cmd Action )
reducer action model =
    case action of
        Todo.Actions.OnFetchTodos response ->
            ( { model | todos = response }, Cmd.none )

        Todo.Actions.OnLocationChange location ->
            let
                newRoute =
                    parseLocation location
            in
                ( { model | route = newRoute }, Cmd.none )
