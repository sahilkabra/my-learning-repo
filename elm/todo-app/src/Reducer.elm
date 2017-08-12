module Reducer exposing (..)

import Actions exposing (Action)
import Model exposing (Model)


reducer : Action -> Model -> ( Model, Cmd Action )
reducer action model =
    ( model, Cmd.none )
