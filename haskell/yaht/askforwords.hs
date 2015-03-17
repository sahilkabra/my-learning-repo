module Main
  where

import System.IO

main = do
  words <- askForWords
  putStrLn ("You entered: " ++ words)

askForWords = do
  putStrLn "Enter a word"
  word <- getLine
  if word == ""
    then return []
  else do
    rest <- askForWords
    return (word : rest)
