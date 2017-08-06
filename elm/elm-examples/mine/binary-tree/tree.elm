module Main exposing (..)

import Html exposing (..)

type Tree a =
    Empty | Node a (Tree a) (Tree a)

empty : Tree a
empty =
    Empty

-- operations on tree
insert : comparable -> Tree comparable -> Tree comparable
insert n t =
    case t of
        Empty ->
            Node n Empty Empty
        Node v left right ->
            if n > v then
                Node v left (insert n right)
            else if n < v then
                Node v (insert n left) right
            else t

inorder : Tree a -> String
inorder t =
    case t of
        Empty ->
            " N"
        Node v left right ->
            (" " ++ toString v) ++ (inorder left) ++ (inorder right)


-- helpers
display : String -> a -> Html msg
display msg value =
    div []
        [ Html.text ( msg ++ " => " ++ toString value) ]

-- playground
main : Html msg
main =
    div []
        [ display "rootTree" (inorder rootTree)
        , display "leftTree" (inorder leftTree)
        ]

rootTree : Tree comparable
rootTree =
    insert 10 Empty

leftTree : Tree comparable
leftTree =
    insert 5 rootTree

