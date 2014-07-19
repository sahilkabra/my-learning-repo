import sys

def run():
    seqstr, strtomatch = sys.stdin.readline().split(" ");
    start = -1;
    for d in seqstr:
        start = strtomatch.find(d, start + 1);
        if (start == -1): break;
    if (start == -1): 
        print "unsublime";
    else:
        print "sublime";

for n in range(int(sys.stdin.readline())):
    run();
