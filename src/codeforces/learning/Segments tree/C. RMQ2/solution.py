import heapq
import math
import os
import sys


class TreeNode:
    def __init__(self, v=0, l=None, r=None, L=None, R=None):
        self.v = v
        self.l = l
        self.r = r
        self.L = L
        self.R = R
        self.set = None
        self.add = None


def solve(n, nums, cmd):

    def build(l, r):
        if l == r:
            return TreeNode(nums[l], l + 1, r + 1)
        else:
            m = math.floor((l + r) / 2)
            node = TreeNode(0, l + 1, r + 1)
            node.L = build(l, m)
            node.R = build(m + 1, r)
            node.v = min(node.L.v, node.R.v)
            return node

    def get_min(node, l, r):
        push(node)
        nl = node.l
        nr = node.r
        if nl >= l and nr <= r:
            return node.v
        if max(nl, l) > min(nr, r):
            return float('inf')
        return min(get_min(node.L, l, r), get_min(node.R, l, r))

    def update_set(node, l, r, x):
        nl = node.l
        nr = node.r
        if nl > r or nr < l:
            return float('inf')
        if nl >= l and nr <= r:
            node.v = x
            node.set = x
            return x
        return min(update_set(node.L, l, r, x), update_set(node.R, l, r, x))

    def update_add(node, l, r, x):
        nl = node.l
        nr = node.r
        if nl > r or nr < l:
            return
        if nl >= l and nr <= r:
            node.v = x
            node.add = x
            return x
        return min(update_add(node.L, l, r, x), update_add(node.R, l, r, x))

    def push(node):
        if node.l == node.r:
            return
        if node.L is not None:
            if node.set is not None:
                node.L.v = node.set
                node.L.set = node.set
            if node.add is not None:
                node.L.v += node.add
                node.L.set = node.add
        if node.R is not None:
            if node.set is not None:
                node.R.v = node.set
                node.R.set = node.set
            if node.add is not None:
                node.R.v += node.add
                node.R.set = node.add
        node.set = None

    h = math.ceil(math.log(n, 2))
    root = build(0, n - 1)
    for c in cmd:
        if c[0] == 'min':
            print(get_min(root, c[1], c[2]))
        if c[0] == 'set':
            update_set(root, c[1], c[2], c[3])
        if c[0] == 'add':
            update_set(root, c[1], c[2], c[3])


def read_data(resource):
    n = list(map(int, resource.readline().strip().split(' ')))[0]
    nums = list(map(int, resource.readline().strip().split(' ')))
    cmd = []
    for i in range(pow(10, 18)):
        data_str = resource.readline().strip()
        if data_str == '':
            break
        data = data_str.split(' ')
        cmd.append([data[0], int(data[1]), int(data[2]), int(data[3] if len(data) > 3 else 0)])
    solve(n, nums, cmd)

# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

print('test 001')
read_data(open('tests/001.txt'))

print('test 002')
read_data(open('tests/002.txt'))

# read_data(sys.stdin)
