module Main exposing (..)

import Html exposing (div)


main : Html.Html Msg
main =
    div []
        [ Html.text "Hello World" ]


type Msg
    = Noop
