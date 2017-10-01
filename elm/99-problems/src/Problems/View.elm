module Problems.View exposing (view)

import Html exposing (div, text, header, nav, section, h2, ul, li, a)
import Html.Attributes exposing (class, href)


view : Html.Html a
view =
    div [ class "problem-view-container" ]
        [ header [ class "header" ]
            [ h2 [] [ text "99 Problems" ] ]
        , section [ class "body" ]
            [ nav [ class "menu" ] [ menu ]
            , div [ class "content" ] [ text "Problem Solution Here" ]
            ]
        ]


type alias Problem =
    { key : Int
    , label : String
    , url : String
    }


problems : List Problem
problems =
    let
        problem n =
            { key = n, label = "Problem " ++ toString n, url = "/problem/" ++ toString n }
    in
        List.map problem (List.range 1 99)


menu : Html.Html a
menu =
    ul [ class "menu-container" ]
        (List.map menuItem problems)


menuItem : Problem -> Html.Html a
menuItem p =
    li [ class "menu-item" ]
        [ a [ href p.url ] [ text p.label ] ]
