import sys

class DIRECTION:
    LEFT, RIGHT = range(2);

class Tree:
    root = None;
    _map = {};
    
    def getNode(self, nodevalue):
        if nodevalue in self._map:
            return self._map[nodevalue];
        return None;

    def setRoot(self, root):
        self.addNode(root);
    
    #By default adds the node to the left
    def addNode(self, node, parentNode=None, direction=DIRECTION.LEFT):
        self._map[node.value] = node;
        if parentNode is None:
            self.root = node;
        else:
            parentNode.add(node, direction);

    def __repr__(self):
        return 'Tree(root=%r)' % self.root;
        

class Node:
    value = None;
    parent = None;
    direction = {};

    def add(self, childNode, direction):
        if childNode.parent is None: 
            childNode.parent = self;

        self[direction] = childNode;

    def __getitem__(self, key):
        if key in self.direction:
            return self.direction[key];
        return None;

    def __setitem__(self, key, item):
        self.direction[key] = item;

    def __init__(self, value, parent=None):
        self.value = value;
        self.parent = parent;
        
    def __repr__(self):
        return 'Node(value=%r, parent=%r, child=%r)' % (self.value, self.parent, self.direction);

def buildTree():
    tree = Tree();
    k = int(sys.stdin.readline());
    for line in range(k):
        parentNodeValue, childNodeValue = sys.stdin.readline().strip().split(' ');
        parent = tree.getNode(parentNodeValue);
        if (parent is None):
            parent = Node(parentNodeValue);
            tree.setRoot(parent);

        child = Node(childNodeValue, parent);
        direction = DIRECTION.LEFT;
        if parent[direction] is not None:
            direction = DIRECTION.RIGHT;

        parent.add(child, direction);
    print tree;


def run():
    buildTree();

for i in range(int(sys.stdin.readline())):
    run();
