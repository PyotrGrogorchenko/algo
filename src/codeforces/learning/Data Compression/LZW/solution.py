import sys


class Node:
    def __init__(self, c):
        self.children = {}
        self.c = c
        self.code = -1


class Trie:
    def __init__(self):
        self.root = Node('$root')
        self.lastCode = -1
        for c in 'abcdefghijklmnopqrstuvwxyz':
            self.ins(c)
            # self.root.children[c] = Node(c)
            # self.root.children[c].code = ord(c) - ord('a')

    def ins(self, w):
        node = self.root
        for c in w:
            if c not in node.children:
                node.children[c] = Node(c)
            node = node.children[c]
        if node.code == -1:
            self.lastCode += 1
            node.code = self.lastCode

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
        return node.code


def solve(resource):
    s = resource.readline().strip()
    res = []

    t = Trie()
    currS = ''
    for c in s:
        if t.search(currS + c):
            currS += c
            continue
        res.append(t.get_code(currS))
        t.ins(currS + c)
        currS = c

    res.append(t.get_code(currS))
    print(' '.join(map(str, res)))

print('test 001')
solve(open('tests/001.txt'))

print('test 002')
solve(open('tests/002.txt'))

print('test 003')
solve(open('tests/003.txt'))

print('test 004')
solve(open('tests/004.txt'))

# solve(sys.stdin)