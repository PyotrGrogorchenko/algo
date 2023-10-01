import os
import sys
from operator import itemgetter


def dsu_find(p, v):
    if p[v] == v:
        return v
    return dsu_find(p, p[v])


def dsu_unite(p, a, b):
    a = dsu_find(p, a)
    b = dsu_find(p, b)
    if a != b:
        p[a] = p[b]


def solve(n, m, edges):
    edges.sort(key=itemgetter(2))

    p = [i for i in range(n)]
    res = 0
    for e in edges:
        if dsu_find(p, e[0]-1) != dsu_find(p, e[1]-1):
            dsu_unite(p, e[0]-1, e[1]-1)
            res += e[2]
    print(res)


def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    edges = []
    for i in range(nm[1]):
        edges.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], edges)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')
    read_data(file_data)


read_data(sys.stdin)

