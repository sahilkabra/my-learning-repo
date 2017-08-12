module Main exposing (..)

import Html exposing (Html, program, div)


main : Program Never State Action
main =
    program
        { init = init
        , view = view
        , update = reducer
        , subscriptions = subscriptions
        }


type alias State =
    String


type Action
    = Noop


init : ( State, Cmd Action )
init =
    ( "Hello", Cmd.none )


view : State -> Html Action
view model =
    div []
        [ Html.text model ]


reducer : Action -> State -> ( State, Cmd Action )
reducer msg state =
    ( state, Cmd.none )


subscriptions : State -> Sub Action
subscriptions state =
    Sub.none
