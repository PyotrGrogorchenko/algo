import heapq
import os
import sys


class TreeNode:
    def __init__(self, v=0, l=None, r=None):
        self.v = v
        self.l = l
        self.r = r


def solve(cmd):

    def exists(n, v):
        if n is None:
            return False
        if n.v == v:
            return True
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
                n.r = TreeNode(v)
            return
        if n.l is not None:
            insert(n.r, v)
        else:
            n.l = TreeNode(v)

    def minimum(n):
        if n.l is None:
            return n
        return minimum(n.l)

    def maximum(n):
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
            if n.r is not None:
                n = n.r
            else:
                n = None
        return n


    root = None

    for c in cmd:
        if c[0] == 'exists':
            print(exists(root, c[1]))
        if c[0] == 'insert':
            insert(root, c[1])

    print('solve', cmd)



def read_data(resource):
    cmd = []
    while True:
        data = resource.readline().strip()
        if data == '':
            break
        data = data.split(' ')
        cmd.append([data[0], int(data[1])])
    solve(cmd)


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

print('test 001')
read_data(open('tests/001.txt'))

# read_data(sys.stdin)
