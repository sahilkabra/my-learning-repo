module Todo.Reducer exposing (..)

import Todo.Actions exposing (Action)
import Todo.Model exposing (TodoModel)


reducer : Action -> TodoModel -> ( TodoModel, Cmd Action )
reducer action model =
    ( model, Cmd.none )
