module Main exposing (main)

import Actions exposing (Action)
import Html exposing (Html, program, div)
import Reducer exposing (reducer)
import Model exposing (Model)


main : Program Never Model Action
main =
    program
        { init = init
        , view = view
        , update = reducer
        , subscriptions = subscriptions
        }


init : ( Model, Cmd Action )
init =
    ( Model "Hello Elm", Cmd.none )


view : Model -> Html Action
view model =
    div []
        [ Html.text model.message ]


subscriptions : Model -> Sub Action
subscriptions model =
    Sub.none
