import sys


# class Node:
#     def __init__(self, c, code):
#         self.children = {}
#         self.c = c
#         self.code = code
#
#
# class Trie:
#     def __init__(self):
#         self.root = Node('$root', -1)
#         self.lastCode = 0
#         for c in 'abcdefghijklmnopqrstuvwxyz':
#             self.ins(c)
#
#     def ins(self, w):
#         node = self.root
#         for c in w:
#             if c not in node.children:
#                 node.children[self.lastCode] = Node(c, self.lastCode)
#             node = node.children[c]


def solve(resource):
    encryption = list(map(int, resource.readline().strip().split(' ')))
    dict = list('abcdefghijklmnopqrstuvwxyz')

    _c = encryption[0]
    _s = dict[_c]
    res = _s

    for i in range(1, len(encryption)):
        c = encryption[i]
        if c > len(dict)-1:
            s = dict[_c] + _s
        else:
            s = dict[c]
        res += s
        _s = s[0]
        dict.append(dict[_c] + _s)
        _c = c
    print(res)


print('test 001')
print('abacaba')
solve(open('tests/001.txt'))

print('test 002')
print('abacabadabacabae')
solve(open('tests/002.txt'))

print('test 003')
print('adadada')
solve(open('tests/003.txt'))

print('test 004')
print('tobeornottobeortobeornot')
solve(open('tests/004.txt'))

# solve(sys.stdin)