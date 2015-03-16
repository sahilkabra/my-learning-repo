module Main where
import System.Environment

main :: IO ()
main = do
  print "Enter your name: "
  name <- getLine
  print ("Your name is: " ++ name)
