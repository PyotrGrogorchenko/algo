import sys


class Node:
    def __init__(self, c, d):
        self.children = {}
        self.c = c
        self.d = d
        self.code = -1


class Trie:
    def __init__(self):
        self.root = Node('root', 0)
        self.lastCode = ord('z') - ord('a')

    def ins(self, w):
        node = self.root
        for c in w:
            if c not in node.children:
                node.children[c] = Node(c, node.d + 1)
            node = node.children[c]

    def search(self, w):
        node = self.root
        for c in w:
            if c not in node.children:
                return False
            node = node.children[c]
        return True

    def get_code(self, w):
        node = self.root
        for c in w:
            node = node.children[c]

        if node.code == -1:
            node.code = ord(node.c) - ord('a') if node.d == 1 else self.lastCode + 1
            self.lastCode + 1
        return node.code


def solve(resource):
    s = resource.readline().strip()
    res = []

    currS = ''
    t = Trie()
    for c in s:
        if t.search(currS + c):
            currS += c
            continue

        t.ins(currS + c)
        if not currS == '':
            res.append(t.get_code(currS))
        currS = c

    res.append(t.get_code(currS))
    print(' '.join(map(str, res)))

print('test 001')
solve(open('tests/001.txt'))

# solve(sys.stdin)