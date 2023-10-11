import heapq
import os
import sys


class TreeNode:
    def __init__(self, v=0, p=None, l=None, r=None):
        self.v = v
        self.l = l
        self.r = r
        self.p = p


def solve(cmd):

    def exists(n, v):
        if n is None:
            return 'false'
        if n.v == v:
            return 'true'
        if v > n.v:
            return exists(n.r, v)
        return exists(n.l, v)

    def insert(n, v):
        nonlocal root
        if root is None:
            root = TreeNode(v)
            return
        if n.v == v:
            return
        if v > n.v:
            if n.r is not None:
                insert(n.r, v)
            else:
                n.r = TreeNode(v, n)
            return
        if n.l is not None:
            insert(n.r, v)
        else:
            n.l = TreeNode(v, n)

    def minimum(n):
        if n is None:
            return 'none'
        if n.l is None:
            return n
        return minimum(n.l)

    def maximum(n):
        if n is None:
            return 'none'
        if n.r is None:
            return n
        return maximum(n.r)

    def delete(n, v):
        if n is None:
            return n
        if v < n.v:
            n.l = delete(n.l, v)
        if v > n.v:
            n.r = delete(n.r, v)
        if n.l is not None and n.r is not None:
            n.v = minimum(n.right).v
            n.r = delete(n.r, n.v)
        else:
            if n.l is not None:
                n = n.l
            elif n.r is not None:
                n = n.r
            else:
                n = None
        return n

    def next(n, x):
        curr = n
        res = None
        while curr is not None:
            if curr.v > x:
                res = curr
                curr = curr.l
            else:
                curr = curr.r
        return 'none' if res is None else res.v

    def prev(n, x):
        if n is None:
            return 'none'
        if x < n.v:
            return prev(n.l, x) or n.v
        return minimum(n.r).v

    root = None

    for c in cmd:
        if c[0] == 'exists':
            print(exists(root, c[1]))
        if c[0] == 'insert':
            insert(root, c[1])
        if c[0] == 'delete':
            delete(root, c[1])
        if c[0] == 'next':
            print(next(root, c[1]))
        if c[0] == 'prev':
            print(prev(root, c[1]))


def read_data(resource):
    cmd = []
    while True:
        data = resource.readline().strip()
        if data == '':
            break
        data = data.split(' ')
        cmd.append([data[0], int(data[1])])
    solve(cmd)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')

# print('test 001')
# read_data(open('tests/001.txt'))

read_data(sys.stdin)
