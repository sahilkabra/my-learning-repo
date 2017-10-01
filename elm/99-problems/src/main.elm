module Main exposing (main)

import Html exposing (Html, div)
import Html.Attributes exposing (id, class)
import Problems.View exposing (view)


main : Html msg
main =
    div
        [ class "app-container"
        , id "app"
        ]
        [ view ]
