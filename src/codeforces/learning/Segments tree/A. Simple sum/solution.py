import heapq
import os
import sys


def solve(n, x, y, a0, m, z, t, b0):
    a = [a0]
    for i in range(1, n):
        a.append((a[-1] * x + y) % 65536)

    b = [b0]


def read_data(resource):
    data1 = list(map(int, resource.readline().strip().split(' ')))
    data2 = list(map(int, resource.readline().strip().split(' ')))
    solve(data1[0], data1[1], data1[2], data1[3], data2[0], data2[1], data2[2], data2[3])


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

print('test 001')
read_data(open('tests/001.txt'))

# read_data(sys.stdin)
