module Routing exposing (..)

import Problems.View exposing (ProblemNumber)
import UrlParser as Url exposing ((</>))
import Navigation exposing (Location)


-- define all possible routes


type Route
    = Home
    | Problem ProblemNumber


matchers : Url.Parser (Route -> a) a
matchers =
    Url.oneOf
        [ Url.map Home Url.top
        , Url.map Problem (Url.s "problem" </> Url.int)
        ]


parseLocation : Location -> Route
parseLocation location =
    case (Url.parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            Home
