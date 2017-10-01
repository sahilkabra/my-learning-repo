module Problems.View exposing (view)

import Html exposing (div, text)
import Html.Attributes exposing (class)


view : Html.Html a
view =
    div [ class "problem-view-container" ] [ text "Problem View" ]
