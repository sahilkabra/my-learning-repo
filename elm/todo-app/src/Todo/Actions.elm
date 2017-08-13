module Todo.Actions exposing (..)

import Http
import Todo.Model exposing (TodoItem)
import RemoteData exposing (WebData)
import Json.Decode as Decode
import Json.Decode.Pipeline exposing (decode, required, optional, hardcoded)


type Action
    = OnFetchTodos (WebData (List TodoItem))


fetchTodos : Cmd Action
fetchTodos =
    Http.get url decoder
        |> RemoteData.sendRequest
        |> Cmd.map OnFetchTodos


url : String
url =
    "rapi/todos"


decoder : Decode.Decoder (List TodoItem)
decoder =
    Decode.list todoItemDecoder


todoItemDecoder : Decode.Decoder TodoItem
todoItemDecoder =
    decode TodoItem
        |> required "id" Decode.int
        |> hardcoded Todo.Model.Pending
        |> required "task" Decode.string
