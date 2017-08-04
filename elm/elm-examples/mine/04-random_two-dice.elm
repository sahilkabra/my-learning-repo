module Main exposing (..)

import Html exposing (..)
import Html.Events exposing (onClick)
import Random exposing (..)
import Svg exposing (..)
import Svg.Attributes exposing (..)


main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- Model


type alias Model =
    { dieFace1 : Int
    , dieFace2 : Int
    }



-- View


view : Model -> Html Msg
view model =
    div []
        [ div [] [ Html.text (toString model.dieFace1) ]
        , div [] [ Html.text (toString model.dieFace2) ]
        , button [ onClick Roll ] [ Html.text "Roll Dice" ]
        , svg [ Svg.Attributes.height "100px", Svg.Attributes.width "100px", Svg.Attributes.display "block" ]
            ([ rect "5" "10" "70" "60" "#dedede" ]
                ++ getFace model.dieFace1
                ++ [ rect "80" "10" "70" "60" "#dedede" ]
                ++ getFace model.dieFace2
            )
        ]



-- Update function


type Msg
    = Roll
    | DieFace1 Int
    | DieFace2 Int



-- Cmd tells elm to execute things involving side effects


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Roll ->
            ( model, (Cmd.batch [ Random.generate DieFace1 rollDice, Random.generate DieFace2 rollDice ]) )

        DieFace1 value ->
            ( { model | dieFace1 = value }, Cmd.none )

        DieFace2 value ->
            ( { model | dieFace2 = value }, Cmd.none )



-- subscriptions


subscriptions : Model -> Sub msg
subscriptions model =
    Sub.none



-- init


init : ( Model, Cmd Msg )
init =
    ( Model 1 1, Cmd.none )


rollDice : Random.Generator Int
rollDice =
    Random.int 1 6



-- helpers


type alias Height =
    String


type alias Width =
    String


type alias LeftX =
    String


type alias LeftY =
    String


type alias Fill =
    String


rect : LeftX -> LeftY -> Height -> Width -> Fill -> Svg msg
rect x y height width fill =
    Svg.rect
        [ Svg.Attributes.x x
        , Svg.Attributes.y y
        , Svg.Attributes.fill fill
        , Svg.Attributes.rx "2"
        , Svg.Attributes.ry "2"
        , Svg.Attributes.width width
        , Svg.Attributes.height height
        ]
        []


getFace : Int -> List (Svg msg)
getFace dieFace =
    if dieFace == 1 then
        [ rect "20" "20" "10" "10" "#000000" ]
    else if dieFace == 2 then
        [ rect "20" "20" "10" "10" "#000000"
        , rect "40" "20" "10" "10" "#000000"
        ]
    else if dieFace == 3 then
        [ rect "20" "20" "10" "10" "#000000"
        , rect "40" "20" "10" "10" "#000000"
        , rect "20" "40" "10" "10" "#000000"
        ]
    else if dieFace == 4 then
        [ rect "20" "20" "10" "10" "#000000"
        , rect "40" "20" "10" "10" "#000000"
        , rect "20" "40" "10" "10" "#000000"
        , rect "40" "40" "10" "10" "#000000"
        ]
    else if dieFace == 5 then
        [ rect "20" "20" "10" "10" "#000000"
        , rect "40" "20" "10" "10" "#000000"
        , rect "20" "40" "10" "10" "#000000"
        , rect "40" "40" "10" "10" "#000000"
        , rect "20" "60" "10" "10" "#000000"
        ]
    else if dieFace == 6 then
        [ rect "20" "20" "10" "10" "#000000"
        , rect "40" "20" "10" "10" "#000000"
        , rect "20" "40" "10" "10" "#000000"
        , rect "40" "40" "10" "10" "#000000"
        , rect "20" "60" "10" "10" "#000000"
        , rect "40" "60" "10" "10" "#000000"
        ]
    else
        []
