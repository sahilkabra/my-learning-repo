module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing ( onInput, onClick )
import WebSocket

main : Program Never Model Msg
main =
    Html.program {
        view = view,
        init = init,
        update = update,
        subscriptions = subscriptions
    }

-- init
init : (Model, Cmd Msg)
init =
    ( Model [] "", Cmd.none )

-- Model
type alias Model =
    { messages : List String
    , messageToSend: String
}

-- View
view : Model -> Html Msg
view model =
    div []
    [ h6 [] [ Html.text "Messages" ]
    , div [] (List.map showMessage model.messages)
    , input [ onInput Input, type_ "text" ] []
    , button [ onClick Send ] [ Html.text "Send" ]
    ]

-- update
type Msg =
    Send
    | Input String
    | NewMessage String

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        Send ->
            ( { model | messageToSend = "" }, WebSocket.send wsEndpoint model.messageToSend )

        Input input ->
            ( { model | messageToSend = input }, Cmd.none )

        NewMessage msg ->
            ( { model | messages = msg :: model.messages }, Cmd.none )

-- subscriptions
subscriptions : Model -> Sub Msg
subscriptions model =
    WebSocket.listen wsEndpoint NewMessage

-- helpers
showMessage : String -> Html Msg
showMessage msg =
    div [] [ Html.text msg ]

wsEndpoint : String
wsEndpoint = "ws://echo.websocket.org"
