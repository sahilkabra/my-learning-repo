#!/usr/bin/python
import sys

fibvalue = {};

def fib(n):
  global fibvalue;
  if n not in fibvalue:
    fibvalue[n] = fib(n-1) + fib(n-2);
  return fibvalue[n];

def run():
  global fibvalue;
  fibvalue = {0:0, 1:1};
  n = (int(sys.stdin.readline()));
  if (n==1):
    del fibvalue[1];
  elif n > 1:  
    fib(n-1);

  for index, value in fibvalue.items():
    print value;


for i in range(int(sys.stdin.readline())):
  run()
