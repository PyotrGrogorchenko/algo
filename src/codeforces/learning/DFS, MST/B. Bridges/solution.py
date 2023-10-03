import heapq
import os
import sys


def solve(n, m, e):
    g = {i:[] for i in range(n)}
    for edge in e:
        g[edge[0]-1].append(edge[1]-1)
    print('solve')


def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    e = []
    for i in range(nm[1]):
        e.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], e)


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

read_data(open('tests/001.txt'))

# read_data(sys.stdin)
