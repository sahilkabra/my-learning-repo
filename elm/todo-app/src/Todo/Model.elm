module Todo.Model exposing (..)


type alias TodoModel =
    { todos : List TodoItem
    }


initialModel : TodoModel
initialModel =
    { todos =
        [ TodoItem 1 Pending "Learn CycleJS"
        , TodoItem 2 Inprogress "Build Elm App"
        , TodoItem 3 Complete "Configure Laptop env"
        ]
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
