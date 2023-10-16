import heapq
import math
import os
import sys


class TreeNode:
    def __init__(self, v=0, l=None, r=None):
        self.v = v
        self.l = l
        self.r = r
        self.inc = 0


def solve(n, nums, cmd):

    def build(i, l, r):
        if r == l:
            sums[i] = TreeNode(nums[l], l + 1, r + 1)
        else:
            m = math.floor((l + r) / 2)
            build(2 * i, l, m)
            build(2 * i + 1, m + 1, r)
            sums[i] = TreeNode(sums[2 * i].v + sums[2 * i + 1].v, l + 1, r + 1)

    def get_sum(i, l, r):
        nl = sums[i].l
        nr = sums[i].r
        if nl >= l and nr <= r:
            return sums[i].v
        if max(nl, l) > min(nr, r):
            return 0
        return get_sum(i * 2, l, r) + get_sum(i * 2 + 1, l, r)

    def set_num(i, t, x):
        nl = sums[i].l
        nr = sums[i].r
        if nl == t and nr == t:
            sums[i].v = x
            return x
        if nl <= t <= nr:
            sums[i].v = set_num(i * 2, t, x) + set_num(i * 2 + 1, t, x)
        return sums[i].v


    h = math.ceil(math.log(n, 2))
    k = 2 << h
    sums = [0 for i in range(k)]
    build(1, 0, n - 1)

    for c in cmd:
        if c[0] == 'sum':
            print(get_sum(1, c[1], c[2]))
        if c[0] == 'set':
            set_num(1, c[1], c[2])


def read_data(resource):
    n = list(map(int, resource.readline().strip().split(' ')))[0]
    nums = list(map(int, resource.readline().strip().split(' ')))
    cmd = []
    for i in range(1000000):
        data_str = resource.readline().strip()
        if data_str == '':
            break
        data = data_str.split(' ')
        cmd.append([data[0], int(data[1]), int(data[2])])
    solve(n, nums, cmd)

# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')


# print('test 001')
# read_data(open('tests/001.txt'))

read_data(sys.stdin)
