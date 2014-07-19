import sys

SQUARE = dict((key, key*key) for key in range(0, 10));
def isHappy(num):
    s = set();
    while (num > 1 and num not in s):
        s.add(num);
        num = sum(SQUARE[int(d)] for d in str(num)); 
    return "Y" if (num == 1) else "N";

def run():
    num = int(sys.stdin.readline());
    print isHappy(num);

for n in range(int(sys.stdin.readline())):
    run()
