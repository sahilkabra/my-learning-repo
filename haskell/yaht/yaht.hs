{-
 - This is a block comment
-}
-- This is a line comment
import Data.Char

strToBool :: String -> [Bool]
strToBool s = map Data.Char.isUpper s

maxInList :: (Ord a, Num a) => [a] -> a
maxInList a = foldr max 0 a

roots a b c =
  ((-b + sqrt (b*b - (4 * a * c)))/(2*a),
  (-b + sqrt (b*b - (4 * a * c)))/(2*a))

roots' a b c =
  let
    twicea = 2 * a
    sqrtabc = sqrt (b*b - 4 * a * c)
  in
    ((-b + sqrtabc) / twicea,
    (-b - sqrtabc) / twicea)

exponent' :: (Num a, Eq a) => a -> a -> a
exponent' x 1 = x
exponent' a b = a * (exponent' a (b - 1))

my_foldl :: (a -> a -> a) -> a -> [a] -> a
my_foldl _ a [] = a
my_foldl f a (x:xs) = my_foldl f nv xs
  where
    nv = f a x

fib :: (Num a, Eq a) => a -> a
fib 1 = 1
fib 2 = 1
fib n = fib (n - 2) + fib (n - 1)

mult :: (Num a, Eq a) => a -> a -> a
mult a 1 = a
mult a b = a + mult a (b - 1)

my_map :: (a -> b) -> [a] -> [b]
my_map _ [] = []
my_map f (x:xs) = (f x) : my_map f xs
