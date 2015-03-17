module Main
  where

import System.IO
import System.Random

main = do
  num <- randomRIO(1::Int, 100)
  putStrLn "I am thinking of a number between 1 and 100"
  doGuess num

doGuess num = do
  putStrLn "Enter your guess"
  guess <- getLine
  let guessNum = read guess
  if guessNum < num
    then do putStrLn "To Low"
            doGuess num
    else if guessNum > num
      then do putStrLn "To High"
              doGuess num
    else do putStrLn "You win"
