import sys

def run():
    sys.stdin.readline();    
    duplicate = 0;
    allNumbers = dict();
    dupNumbers = dict();
    numbers = sys.stdin.readline().strip().split(' ');
    print numbers;
    for n in numbers:
        if n not in allNumbers:
            allNumbers[n] = 1;
        else:
            dupNumbers[len(dupNumbers)] = int(n);

    print dupNumbers;
    dupNumLength = len(dupNumbers);

    if dupNumbers[dupNumLength - 1] < dupNumbers[dupNumLength - 2]:
        print dupNumbers[dupNumLength-1];
        print dupNumbers[dupNumLength-2];
    else :
        print dupNumbers[dupNumLength-2];        
        print dupNumbers[dupNumLength-1];        

for n in range(int(sys.stdin.readline())):
    run();
