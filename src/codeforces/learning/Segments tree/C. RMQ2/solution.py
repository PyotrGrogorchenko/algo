import heapq
import math
import os
import sys


class TreeNode:
    def __init__(self, v=0, l=None, r=None):
        self.v = v
        self.l = l
        self.r = r


def solve(n, nums, cmd):
    print(n, nums, cmd)


def read_data(resource):
    n = list(map(int, resource.readline().strip().split(' ')))[0]
    nums = list(map(int, resource.readline().strip().split(' ')))
    cmd = []
    for i in range(pow(10, 18)):
        data_str = resource.readline().strip()
        if data_str == '':
            break
        data = data_str.split(' ')
        cmd.append([data[0], int(data[1]), int(data[2])])
    solve(n, nums, cmd)

# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

print('test 001')
read_data(open('tests/001.txt'))

# read_data(sys.stdin)
