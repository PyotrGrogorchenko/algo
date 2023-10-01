import heapq
import os
import sys


def solve(n, m, e):
    if m == 0:
        print(-1)
        return
    g = {i:[] for i in range(n)}
    for edge in e:
        g[edge[0]-1].append(edge[1]-1)

    visited = set()
    res = []

    def dfs(v):
        visited.add(v)
        for nei in g[v]:
            if nei not in visited:
                dfs(nei)
        res.append(v + 1)

    for _nei in g:
        if _nei not in visited:
            dfs(_nei)

    if len(res) < n:
        print(-1)
        return
    print(' '.join(map(str, reversed(res))))


def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    e = []
    for i in range(nm[1]):
        e.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], e)


for file_name in os.listdir(path='tests'):
    file_data = open(f'tests/{file_name}')
    read_data(file_data)

# read_data(sys.stdin)

