module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Regex exposing (..)


main =
    Html.beginnerProgram
        { model = model
        , view = view
        , update = update
        }



-- MODEL


type alias Model =
    { name : String
    , password : String
    , passwordAgain : String
    , age : String
    }


model : Model
model =
    Model "" "" "" ""



-- UPDATE


type Msg
    = Name String
    | Password String
    | PasswordAgain String
    | Age String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Name name ->
            { model | name = name }

        Password password ->
            { model | password = password }

        PasswordAgain password ->
            { model | passwordAgain = password }

        Age age ->
            { model | age = age }



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ input [ type_ "text", placeholder "Name", onInput Name ] []
        , input [ type_ "password", placeholder "Password", onInput Password ] []
        , input [ type_ "password", placeholder "Re-enter Password", onInput PasswordAgain ] []
        , input [ type_ "age", placeholder "Enter Age", onInput Age ] []
        , input [ type_ "age", placeholder "Enter Age", onInput Age ] []
        , viewValidation model
        ]


viewValidation : Model -> Html msg
viewValidation model =
    let
        ( color, message ) =
            if not (greaterThan8 (String.length model.password)) then
                ( "red", "Password should be greater than 8!" )
            else if
                not (containsNumber model.password)
                    || not (containsUppercaseLetter model.password)
                    || not (containsLowercaseLetter model.password)
            then
                ( "red", "Password should contain uppercase, lowercase and number!" )
            else if model.password == model.passwordAgain then
                ( "green", "OK" )
            else
                ( "red", "Passwords do not match!" )
    in
        div [ style [ ( "color", color ) ] ] [ text message ]



-- password complexity validation


contains : Regex -> String -> Bool
contains =
    Regex.contains


containsLowercaseLetter : String -> Bool
containsLowercaseLetter =
    contains (Regex.regex "[a-z]+")


containsUppercaseLetter : String -> Bool
containsUppercaseLetter =
    contains (Regex.regex "[A-Z]+")


containsNumber : String -> Bool
containsNumber =
    contains (Regex.regex "\\d+")


greaterThan : comparable -> comparable -> Bool
greaterThan x n =
    n > x


greaterThan8 : Int -> Bool
greaterThan8 =
    greaterThan 8
