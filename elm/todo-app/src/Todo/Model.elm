module Todo.Model exposing (..)

import RemoteData exposing (WebData)


-- Domain Models


type alias TodoModel =
    { todos : WebData (List TodoItem)
    , route : Route
    }


initialModel : Route -> TodoModel
initialModel route =
    { todos = RemoteData.Loading
    , route = route
    }


type alias TodoItemId =
    Int


type alias TodoItem =
    { id : TodoItemId
    , status : TodoStatus
    , task : String
    }


type TodoStatus
    = Complete
    | Pending
    | Inprogress



-- Technical Models


type Route
    = RouteNotFound
    | RouteTodosHome
    | RouteTodoItem TodoItemId
