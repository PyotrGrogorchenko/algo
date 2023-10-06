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

    visited = [0] * n
    res = []
    has_cycle = False

    def dfs(v):
        nonlocal has_cycle
        if has_cycle:
            return
        visited[v] = 1
        for nei in g[v]:
            if visited[nei] == 0:
                dfs(nei)
            if visited[nei] == 1:
                has_cycle = True
                return
        res.append(v + 1)
        visited[v] = 2

    for _nei in g:
        if visited[_nei] == 0:
            dfs(_nei)

    if has_cycle:
        print(-1)
        return
    print(' '.join(map(str, reversed(res))))


def read_data(data):
    nm = list(map(int, data.readline().strip().split()))
    e = []
    for i in range(nm[1]):
        e.append(list(map(int, data.readline().strip().split())))
    solve(nm[0], nm[1], e)


# for file_name in os.listdir(path='tests'):
#     file_data = open(f'tests/{file_name}')

read_data(open('tests/001.txt'))
read_data(open('tests/002.txt'))
read_data(open('tests/003.txt'))
read_data(open('tests/004.txt'))

# read_data(sys.stdin)
