module Main
  where

import System.IO

main = do
  numbers <- readNumbers
  putStrLn ("The sum is " ++ show (sum numbers))
  putStrLn ("The product is " ++ show (product numbers))
  showFactorials numbers

readNumbers = do
  putStrLn "Enter Numbers"
  n <- getLine
  if read n == 0
    then return []
  else do rest <- readNumbers
          return ((read n :: Int) : rest)

showFactorials [] = return ()
showFactorials (x:xs) = do
  putStrLn (show x ++ " factorial " ++ show (factorial x))
  showFactorials xs


factorial :: (Num n, Eq n) => n -> n
factorial 1 = 1
factorial n = n * factorial (n - 1)
