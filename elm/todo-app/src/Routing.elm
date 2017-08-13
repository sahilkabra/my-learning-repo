module Routing exposing (parseLocation)

import Navigation exposing (Location)
import Todo.Model exposing (TodoItemId, Route(..))
import UrlParser exposing (..)


matchers : Parser (Route -> a) a
matchers =
    oneOf
        [ map RouteTodosHome top
        , map RouteTodoItem (s "item" </> int)
        , map RouteTodosHome (s "todos")
        ]


parseLocation : Location -> Route
parseLocation location =
    case (parseHash matchers location) of
        Just route ->
            route

        Nothing ->
            RouteNotFound
