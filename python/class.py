def fo():
    print "fo:";

class MyClass:
    i = 1;
    data = {};
    def f(self):
        return "hello %s" % name;
    
    def b(self, v1='s', v2='v2'):
        self.v1=v1;
        self.v2=v2;

    def r(self, v1, v2='v2'):
        self.v1=v1;
        self.v2=v2;

    def __setitem__(self, key, value):
        self.data[key] = value;

    def __getitem__(self, key):
        return self.data[key];

    def __init__(self):
        self.name = "default";
        self.i = -1;

x = MyClass();
x.r('v1');
x['n']='a';
print x.v1, x.v2
print x['n1'];
    
