module Todo.Model exposing (..)

import RemoteData exposing (WebData)


type alias TodoModel =
    { todos : WebData (List TodoItem)
    }


initialModel : TodoModel
initialModel =
    { todos = RemoteData.Loading
    }


type alias TodoItem =
    { id : Int
    , status : TodoStatus
    , task : String
    }


type TodoStatus
    = Complete
    | Pending
    | Inprogress
