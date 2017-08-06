module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (src, type_, value)
import Html.Events exposing (onClick, onInput)
import Http exposing (..)
import Json.Decode as Decode


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }



-- Model


type alias Model =
    { topic : String
    , gifUrl : String
    , error : String
    }



-- View


view : Model -> Html Msg
view model =
    div []
        [ input [type_ "text", value model.topic, onInput SetTopic] []
        , imageOrError model
        , button [ onClick Fetch ] [ text "Fetch Next Image" ]
        ]



-- update


type Msg
    = Fetch
    | NewGif (Result Http.Error String)
    | SetTopic String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Fetch ->
            ( model, getRandomGif model.topic )

        NewGif (Ok newUrl) ->
            ( { model | gifUrl = newUrl }, Cmd.none )

        NewGif (Err error) ->
            ( { model | error = toString msg }, Cmd.none )

        SetTopic topic ->
            ( { model | topic = topic }, Cmd.none )



-- init


init : ( Model, Cmd Msg )
init =
    ( Model "cats" "waiting.gif" "", Cmd.none )



-- subscriptions


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- helpers


imageOrError : Model -> Html msg
imageOrError model =
    if String.length model.error > 0 then
        div [] [ Html.text model.error ]
    else
        img [ src model.gifUrl ] []


getRandomGif : String -> Cmd Msg
getRandomGif topic =
    let
        url =
            "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" ++ topic

        request =
            Http.get url decodeGifUrl
    in
        Http.send NewGif request


decodeGifUrl : Decode.Decoder String
decodeGifUrl =
    Decode.at [ "data", "image_url" ] Decode.string
