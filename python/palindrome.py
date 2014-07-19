#!/usr/bin/python

import sys

def run():
  str = sys.stdin.readline().strip();
  if (str == str[::-1]):
      print 'Y';
  else:
      print 'N'

for i in range(int(sys.stdin.readline())):
  run()
